package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.PaymentRepo;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RideServiceImp implements RideService {
    @Autowired
    private RideRepo rideRepo;
    @Autowired
    private PaymentRepo paymentRepo;

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
        if(ride.getPaymentDetail().getStatus().equals("Paid"))
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
        ride.getPaymentDetail().setExtraCharges(extraCharges);
        ride.setRideEndAt(rightNow);
        LocalDateTime rideStarted = ride.getRideStartAt();
        Duration duration = Duration.between(rideStarted, rightNow);
        int totalDuration = (int) duration.toMinutes();
        ride.setDuration(totalDuration);
        Double distance = 5 + (Math.random()*5);
        ride.setDistance(distance);
        Double rideAmount = (totalDuration*ride.getVehicle().getType().getCosttime())+(distance*ride.getVehicle().getType().getCostkm());
        ride.getPaymentDetail().setRideAmount(rideAmount);
        ride.setStatus("ended");
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
        if (ride.getStatus().equalsIgnoreCase("Confirmed")) {
            LocalDateTime bookedAt = ride.getBookedAt();
            LocalDateTime autoCancelTime = bookedAt.plusMinutes(20);
            int compareValue = startRideRequestAt.compareTo(autoCancelTime);
            if (compareValue <= 0) {
                ride.setStatus("started");
                ride.setRideStartAt(startRideRequestAt);
                Vehicle vehicle = ride.getVehicle();
                vehicle.setRegistrationNo(registrationNo);
                ride.setVehicle(vehicle);
            }
            else {
                ride.setStatus("autocancelled");
            }
            rideRepo.save(ride);
        }
        return ride;
    }

    //Function to autocancel a ride for the user
    @Override
    public Ride autocancelRide(ObjectId rideId){
        LocalDateTime startRideRequestAt = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equalsIgnoreCase("Confirmed")) {
            LocalDateTime bookedAt = ride.getBookedAt();
            LocalDateTime autoCancelTime = bookedAt.plusMinutes(20);
            int compareValue = startRideRequestAt.compareTo(autoCancelTime);
            if (compareValue > 0) {
                ride.setStatus("autocancelled");
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
        if (ride.getStatus().equalsIgnoreCase("Confirmed")) {
            LocalDateTime bookedAt = ride.getBookedAt();
            LocalDateTime cancel = bookedAt.plusMinutes(5);
            int compareValue = rightNow.compareTo(cancel);
            if (compareValue <= 0) {
                ride.setStatus("cancelled before 5 mins");
            } else {
                ride.setStatus("cancelled after 5 mins");
            }
            rideRepo.save(ride);
        }
        return ride;
    }

    //Function to update destination for a ride
    @Override
    public Ride updateDestination(Zone destinationZone, ObjectId rideId) {
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equalsIgnoreCase("started")) {
            List<Zone> destinationZones = ride.getDestinationZones();
            destinationZones.add(destinationZone);
            ride.setDestinationZones(destinationZones);
            rideRepo.save(ride);
        }
        return ride;
    }

//    @Override
//    public Ride endRideRequest(ObjectId rideId) {
//        LocalDateTime rightNow = LocalDateTime.now();
//        Ride ride = rideRepo.findBy_id(rideId);
//        if (ride.getStatus().equalsIgnoreCase("started")) {
//            ride.setRideEndAt(rightNow);
//            LocalDateTime rideStarted = ride.getRideStartAt();
//            Duration duration = Duration.between(rideStarted, rightNow);
//            int totalDuration = (int) duration.toMinutes();
//            ride.setDuration(totalDuration);
//            Double distance = 5 + (Math.random()*5);
//            ride.setDistance(distance);
//            ride.setStatus("endRideRequest");
//            rideRepo.save(ride);
//        }
//        return ride;
//    }
    //Function to end ride for the user
//    @Override
//    public Ride endRide(ObjectId rideId) {
//        LocalDateTime rightNow = LocalDateTime.now();
//        Ride ride = rideRepo.findBy_id(rideId);
//        if (ride.getStatus().equalsIgnoreCase("started")) {
//            ride.setRideEndAt(rightNow);
//            LocalDateTime rideStarted = ride.getRideStartAt();
//            Duration duration = Duration.between(rideStarted, rightNow);
//            int totalDuration = (int) duration.toMinutes();
//            ride.setDuration(totalDuration);
//            ride.setStatus("endRideRequest");
//            rideRepo.save(ride);
//        }
//        return ride;
//    }

    @Override
    public Payment payForRide(ObjectId rideId, String paymentId) {
        Ride ride = rideRepo.findBy_id(rideId);
        String rider = ride.getRider().getName();
        String mobile = ride.getRider().getMobileNumber();
        String source = ride.getSourceZone().getLocality();
        int sizeOfDestinationZones = ride.getDestinationZones().size();
        String destination = ride.getDestinationZones().get(sizeOfDestinationZones-1).getLocality();
        Double distance = ride.getDistance();
        int duration = ride.getDuration();
        String payment_method_id = ride.getPaymentMethod().get_id();
        Double ride_fare = ride.getPaymentDetail().getRideAmount();
        int discount_percent = ride.getPromoCode().getDiscountPercent();
        Double totalExtraCharges = ride.getPaymentDetail().getTotalExtraCharges();
        Double amount_paid = ride.getPaymentDetail().getTotalAmount();
        LocalDateTime deducted_at = LocalDateTime.now();
        PaymentDetail paymentDetail = ride.getPaymentDetail();
        paymentDetail.setStatus(PaymentStatus.Paid);
        //paymentDetail.setPaidAmount(amount_paid);
        ride.setPaymentDetail(paymentDetail);
        rideRepo.save(ride);

        Payment payment = new Payment();
        payment.setRideId(rideId.toString());
        payment.setPaymentId(paymentId);
        payment.setRider(rider);
        payment.setMobile(mobile);
        payment.setSource(source);
        payment.setDestination(destination);
        payment.setDistance(distance);
        payment.setDuration(duration);
        payment.setPaymentMethodId(payment_method_id);
        payment.setRideFare(ride_fare);
        payment.setDiscountPercent(discount_percent);
        payment.setExtraCharges(totalExtraCharges);
        payment.setAmountPaid(amount_paid);
        payment.setDeductedAt(deducted_at);
        payment.setStatus("Paid");
        paymentRepo.save(payment);
        return payment;
    }

    @Override
    public Payment getPaymentDetails(String rideId) {
        Payment payment = paymentRepo.findByRideId(rideId);
        return payment;

    }

    @Override
    public Payment getOutstandingRideDetail(String rideId) {
        Payment payment = paymentRepo.findByRideIdAndStatus(rideId, PaymentStatus.Pending);
        return payment;
    }
}
