package in.stackroute.umove.bookingservice.service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import in.stackroute.umove.bookingservice.controller.RideController;
import in.stackroute.umove.bookingservice.exception.PaymentDetailsNotFoundException;
import in.stackroute.umove.bookingservice.exception.RideNotFoundException;
import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.PaymentRepo;
import in.stackroute.umove.bookingservice.repo.ConfigRepo;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RideServiceImp implements RideService {

    private static final Logger logger = LogManager.getLogger(RideController.class);

    @Autowired
    private RideRepo rideRepo;

    @Autowired
    private PaymentRepo paymentRepo;

    @Autowired
    private ConfigRepo configRepo;

    @Override
    public Ride confirmRide(Ride ride) {
        PaymentDetail paymentDetail = new PaymentDetail();
        paymentDetail.setExtraCharges(new ArrayList<>());
        ride.setPaymentDetail(paymentDetail);
        rideRepo.save(ride);
        return ride;
    }

    @Override
    public Ride getRideById(ObjectId id) {
        Ride ride = rideRepo.findBy_id(id);
        System.out.println(ride.getPaymentDetail());
        System.out.println(ride.getPaymentDetail().getStatus());
        if(ride.getPaymentDetail().getStatus().equals(PaymentStatus.Paid))
        {
            return rideRepo.findBy_id(id);
        }
        else{
            double totalExtraCharges = calculateTotalExtraCharges(ride);
            int totalAmount = deductFuelAmount(ride);
            totalAmount = deductDiscount(ride,totalAmount);
            totalAmount = calculateRideAmount(totalAmount, totalExtraCharges);
            ride.getPaymentDetail().setTotalExtraCharges(totalExtraCharges);
            ride.getPaymentDetail().setTotalAmount((double) totalAmount);
            rideRepo.save(ride);
            return rideRepo.findBy_id(id);
        }
    }

    private int deductFuelAmount(Ride ride) {
        double rideAmount = ride.getPaymentDetail().getRideAmount();
        if(ride.getPaymentDetail().getFuelRefillAmount()==null){
            return  (int)(rideAmount);
        }else {
            return  (int)((rideAmount)- (ride.getPaymentDetail().getFuelRefillAmount()));
        }
    }

    private int deductDiscount(Ride ride, int totalAmount) {

        if(ride.getPromoCode()==null)
        {
            return totalAmount;
        } else {
            totalAmount = (totalAmount - ((ride.getPromoCode().getDiscountPercent() * totalAmount) / 100));
            return totalAmount;
        }
    }

    private double calculateTotalExtraCharges(Ride ride) {
        List<ExtraCharge> extraCharges = ride.getPaymentDetail().getExtraCharges();
        return extraCharges.stream().mapToDouble(f -> f.getAmount() ).sum();
    }

    private int calculateRideAmount(int totalAmount, double totalExtraCharges) {
        return (int)(totalAmount+(int)(totalExtraCharges));

    }

    @Override
    public Map<String, Object> deleteAll() {
        rideRepo.deleteAll();
        return null;
    }

    @Override
    public Ride addExtraCharges(ObjectId rideId, List<ExtraCharge> extraCharges) {
        LocalDateTime rightNow = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if(ride == null) {
            throw new RideNotFoundException("Ride", "rideId", rideId);
        }
        ride.getPaymentDetail().setExtraCharges(extraCharges);
        ride.setRideEndAt(rightNow);
        LocalDateTime rideStarted = ride.getRideStartAt();
        Duration duration = Duration.between(rideStarted, rightNow);
        int totalDuration = (int) duration.toMinutes();
        ride.setDuration(totalDuration);
        Double distance = 5 + (Math.random() * 5);
        Double roundUpDistance = Double.valueOf(Math.round(distance*100)/100);
        ride.setDistance(roundUpDistance);
        Double rideAmount = (totalDuration*ride.getVehicle().getVehicleType().getCostPerMin() +roundUpDistance*ride.getVehicle().getVehicleType().getCostPerKm());
        Double roundUpRideAmount = Double.valueOf(Math.round(rideAmount*100)/100);
        ride.getPaymentDetail().setRideAmount(roundUpRideAmount);
        ride.setStatus(RideStatus.Ended);
        rideRepo.save(ride);
        return ride;
    }

    //Function to get ride details by userId and rideStatus
    @Override
    public Ride getRideByUserIdNStatus(String userId, String rideStatus){
        Ride ride = rideRepo.findByUserIdNStatus(userId, rideStatus);
        return ride;
    }
    @Override
    public List<Ride> getRidesByUserId(String userId) {
        return rideRepo.findRidesByUserId(userId);
    }

    @Override
    public List<Ride> getAllRides() {
        return rideRepo.findAll();
    }

    //Function to start a ride for the user
    @Override
    public Ride startRide(ObjectId rideId, String registrationNo) {
        LocalDateTime startRideRequestAt = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if(ride == null) {
            throw new RideNotFoundException("Ride", "rideId", rideId);
        }
        if (ride.getStatus().equals(RideStatus.Confirmed)) {
            LocalDateTime bookedAt = ride.getBookedAt();
            Configuration configOfAutocancel = configRepo.findByName("autocancelTime");
            LocalDateTime autoCancelTime = bookedAt.plusMinutes(configOfAutocancel.getValue());
            int compareValue = startRideRequestAt.compareTo(autoCancelTime);
            if (compareValue <= 0) {
                ride.setStatus(RideStatus.Started);
                ride.setRideStartAt(startRideRequestAt);
                Vehicle vehicle = ride.getVehicle();
                vehicle.setRegistrationNo(registrationNo);
                ride.setVehicle(vehicle);
            }
            else {
                ride.setStatus(RideStatus.Auto_Cancelled);
                PaymentDetail paymentDetail = ride.getPaymentDetail();
                paymentDetail.setRideAmount((double)ride.getVehicle().getVehicleType().getBaseFare());
                ride.setPaymentDetail(paymentDetail);
            }
            rideRepo.save(ride);
        }
        return ride;
    }

    //Function to cancel a ride for the user
    @Override
    public Ride cancelRide(ObjectId rideId) {
        LocalDateTime rightNow = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if(ride == null) {
            throw new RideNotFoundException("Ride", "rideId", rideId);
        }
        if (ride.getStatus().equals(RideStatus.Confirmed)) {
            LocalDateTime bookedAt = ride.getBookedAt();
            Configuration configOfAutocancel = configRepo.findByName("autocancelTime");
            LocalDateTime autoCancelTime = bookedAt.plusMinutes(configOfAutocancel.getValue());
            logger.info("Autocancel Time from configuration is "+configOfAutocancel.getValue());
            Configuration configOfCancel = configRepo.findByName("cancelThresholdTime");
            LocalDateTime cancelTime = bookedAt.plusMinutes(configOfCancel.getValue());
            logger.info("Cancel Threshold Time from configuration is "+configOfCancel.getValue());
            int compareValue = rightNow.compareTo(cancelTime);
            if (compareValue <= 0) {
                ride.setStatus(RideStatus.CancelledWithinThreshold);
            }
            else {
                int compareValueForAutocancelling = rightNow.compareTo(autoCancelTime);
                if (compareValueForAutocancelling <= 0) {
                    ride.setStatus(RideStatus.CancelledAfterThreshold);
                }
                else{
                    ride.setStatus(RideStatus.Auto_Cancelled);
                }
                PaymentDetail paymentDetail = ride.getPaymentDetail();
                paymentDetail.setRideAmount((double)ride.getVehicle().getVehicleType().getBaseFare());
                ride.setPaymentDetail(paymentDetail);
            }
            rideRepo.save(ride);
        }
        return ride;
    }

    //Function to update destination for a ride
    @Override
    public Ride updateDestination(Zone destinationZone, ObjectId rideId) {
        Ride ride = rideRepo.findBy_id(rideId);
        if(ride == null) {
            throw new RideNotFoundException("Ride", "rideId", rideId);
        }
        if (ride.getStatus().equals(RideStatus.Started)) {
            List<Zone> destinationZones = ride.getDestinationZones();
            destinationZones.add(destinationZone);
            ride.setDestinationZones(destinationZones);
            rideRepo.save(ride);
        }
        return ride;
    }

    @Override
    public Payment payForRide(ObjectId rideId, String paymentId, String paymentStatus) {
        Ride ride = rideRepo.findBy_id(rideId);
        if(ride == null) {
            throw new RideNotFoundException("Ride", "rideId", rideId);
        }
        Payment payment = new Payment();
        int sizeOfDestinationZones = ride.getDestinationZones().size();
        int discount_percent = 0;
        if(ride.getPromoCode()!= null){ discount_percent= ride.getPromoCode().getDiscountPercent();}
        PaymentDetail paymentDetail = ride.getPaymentDetail();
        if(paymentStatus.equals("Paid")){paymentDetail.setStatus(PaymentStatus.Paid); payment.setStatus("Paid");}
        else {paymentDetail.setStatus(PaymentStatus.Pending); payment.setStatus("Pending");}
        ride.setPaymentDetail(paymentDetail);
        rideRepo.save(ride);

        payment.setRideId(rideId.toString());
        payment.setPaymentId(paymentId);
        payment.setUserId(ride.getRider().get_id());
        payment.setMobile(ride.getRider().getMobileNumber());
        payment.setSource(ride.getSourceZone().getLocality());
        payment.setDestination(ride.getDestinationZones().get(sizeOfDestinationZones-1).getLocality());
        payment.setDistance(ride.getDistance());
        payment.setDuration(ride.getDuration());
        payment.setPaymentMethodId(ride.getPaymentMethod().get_id());
        payment.setRideFare(ride.getPaymentDetail().getRideAmount());
        payment.setDiscountPercent(discount_percent);
        payment.setExtraCharges(ride.getPaymentDetail().getTotalExtraCharges());
        payment.setAmountPaid(ride.getPaymentDetail().getTotalAmount());
        payment.setDeductedAt(LocalDateTime.now());
        paymentRepo.save(payment);
        return payment;

    }

    @Override
    public Payment getPaymentDetails(String rideId) {
        Payment payment = paymentRepo.findByRideId(rideId);
        if(payment == null) {
            throw new PaymentDetailsNotFoundException("Payment Details", "rideId", rideId);
        }
        return payment;

    }

    @Override
    public Payment getOutstandingRideDetail(String userId) {
        Payment payment = paymentRepo.findByUserIdAndStatus(userId, PaymentStatus.Pending);
        return payment;
    }

    @Override
    public boolean isValidUser(String userId) {
        RestTemplate restTemplate = new RestTemplate();
        Map<String, Object> response = restTemplate.getForObject("http://13.235.35.202:8080/userservice/api/v1/users/" + userId, Map.class);
        Map<String, Object> user = (Map<String, Object>) response.get("data");
        if(user.get("userStatus").equals("Active")) {
            return true;
        }

        return false;
    }

    @Override
    public boolean isVehicleAllocated(String zoneId, String typeName) {
        return false;
    }
}
