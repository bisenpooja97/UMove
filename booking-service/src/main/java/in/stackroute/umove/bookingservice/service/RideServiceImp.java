package in.stackroute.umove.bookingservice.service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.PaymentRepo;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import in.stackroute.umove.bookingservice.controller.RideController;
import in.stackroute.umove.bookingservice.exception.PaymentDetailsNotFoundException;
import in.stackroute.umove.bookingservice.exception.RideNotFoundException;
import in.stackroute.umove.bookingservice.repo.ConfigRepo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import in.stackroute.umove.bookingservice.repo.TrackingRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.mail.MessagingException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;

@Service
public class RideServiceImp implements RideService {

    private static final Logger logger = LogManager.getLogger(RideController.class);

    @Autowired
    private RideRepo rideRepo;
    @Autowired
    private PaymentRepo paymentRepo;
    @Autowired
    private MailService mailService;
    @Autowired
    private ConfigRepo configRepo;
    @Autowired
    TrackingRepo trackingRepo;

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
        if(ride.getPaymentDetail().getStatus().equals(PaymentStatus.Paid))
        {
            return rideRepo.findBy_id(id);
        }
        else {
            ride = calculateRideFare(ride);
            rideRepo.save(ride);
            return rideRepo.findBy_id(id);
        }
    }

    public Ride calculateRideFare(Ride ride) {
        Double totalAmount = 0.0;
        PaymentDetail paymentDetail = ride.getPaymentDetail();
        // add base fare for vehicle
        totalAmount += paymentDetail.getBaseFare();

        // add ride fare
        totalAmount += paymentDetail.getRideAmount();

        // deduct discount amount
        if(ride.getPromoCode() != null) {
            totalAmount -= ride.getPromoCode().getDiscountPercent() * totalAmount / 100;
        }
        // added extra charges
        Double totalExtraChareges = paymentDetail.getExtraCharges().stream()
                .mapToDouble(value -> value.getAmount()).sum();
        totalAmount += totalExtraChareges;

        // deduct fuel amount
        totalAmount -= paymentDetail.getFuelRefillAmount();

        //set total amount, paid amount, total extracharges
        paymentDetail.setTotalAmount(totalAmount);
        paymentDetail.setTotalExtraCharges(totalExtraChareges);
        ride.setPaymentDetail(paymentDetail);
        return ride;
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
        System.out.println("extra charges "+extraCharges);
        System.out.println("payment deta"+ride.getPaymentDetail());
        PaymentDetail paymentDetail = ride.getPaymentDetail();
        paymentDetail.setExtraCharges(extraCharges);
        ride.setPaymentDetail(paymentDetail);
//        ride.getPaymentDetail().setTotalExtraCharges(extraCharges);
        ride.setRideEndAt(rightNow);
        LocalDateTime rideStarted = ride.getRideStartAt();
        Duration duration = Duration.between(rideStarted, rightNow);
        int totalDuration = (int) duration.toMinutes();
        ride.setDuration(totalDuration);
//        Double distance = 5 + (Math.random() * 5);
//        Double roundUpDistance = Double.valueOf(Math.round(distance*100)/100);
//        ride.setDistance(roundUpDistance);
        Double distance = calculateTotalDistance(rideId.toHexString());
        ride.setDistance(distance);
        Double rideAmount = (totalDuration*ride.getVehicle().getVehicleType().getCostPerMin() +distance*ride.getVehicle().getVehicleType().getCostPerKm());
        Double roundUpRideAmount = Double.valueOf(Math.round(rideAmount*100)/100);
        ride.getPaymentDetail().setRideAmount(roundUpRideAmount);
        ride.getPaymentDetail().setBaseFare((double) ride.getVehicle().getVehicleType().getBaseFare());
        ride.setStatus(RideStatus.Ended);
        rideRepo.save(ride);
        return ride;
    }

    //Function to get ride details by userId and rideStatus
    @Override
    public Ride getRideByUserIdNStatus(String userId, RideStatus rideStatus){
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
                paymentDetail.setBaseFare((double)ride.getVehicle().getVehicleType().getBaseFare());
                ride.setPaymentDetail(paymentDetail);
            }
            rideRepo.save(ride);
            storeTrackingData(ride);
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
                paymentDetail.setBaseFare((double)ride.getVehicle().getVehicleType().getBaseFare());
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
    public Payment payForRide(ObjectId rideId, String paymentId, PaymentStatus paymentStatus) throws IOException, MessagingException {
        Ride ride = rideRepo.findBy_id(rideId);
        if(ride == null) {
            throw new RideNotFoundException("Ride", "rideId", rideId);
        }

        Payment payment = new Payment();
        int sizeOfDestinationZones = ride.getDestinationZones().size();
        int discount_percent = 0;

        if(ride.getPromoCode()!= null){
            discount_percent= ride.getPromoCode().getDiscountPercent();
        }

        PaymentDetail paymentDetail = ride.getPaymentDetail();
        paymentDetail.setStatus(paymentStatus);
        payment.setStatus(paymentStatus);

        ride.setPaymentDetail(paymentDetail);

        // store payment info in the mongo db
        rideRepo.save(ride);

        // save payment transaction detail in mysql db for consistency
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

        // email receipt to rider
        sendEmail(ride, discount_percent );
        return payment;
    }

    private void sendEmail(Ride ride, int discount_percent) throws IOException, MessagingException {
        Mail mail = new Mail();
        mail.setFrom("umove742@gmail.com");
        mail.setTo(ride.getRider().getEmail());
        mail.setSubject("Ride Recipt");
        Map<String, Object> model = new HashMap<>();
        model.put("name", ride.getRider().getName());
        model.put("distance", ride.getDistance());
        model.put("time", ride.getDuration());
        model.put("rideAmount", ride.getPaymentDetail().getRideAmount());
        if(ride.getPaymentDetail().getTotalExtraCharges() != 0.0){model.put("totalExtraCharges", ride.getPaymentDetail().getTotalExtraCharges());}
        if(discount_percent != 0){model.put("discountPercent", discount_percent);}
        if(ride.getPaymentDetail().getFuelRefillAmount() != 0.0){model.put("fuelRefillAmount", ride.getPaymentDetail().getFuelRefillAmount());}
        model.put("totalAmount", ride.getPaymentDetail().getTotalAmount());
        model.put("paymentStatus", ride.getPaymentDetail().getStatus());
        model.put("location", "Bangalore");
        model.put("signature", "UMOVE");

        mail.setModel(model);

        mailService.sendSimpleMessage(mail, ride, discount_percent);
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
        Map<String, Object> response = restTemplate.getForObject("https://umove-dev.stackroute.io/userservice/api/v1/users/" + userId, Map.class);
        System.out.println("response for user status" + response);
        Map<String, Object> user = (Map<String, Object>) response.get("data");
        System.out.println("user" + user);
        if(user.get("userStatus").equals("Active")) {
            return true;
        }

        return false;
    }

    @Override
    public synchronized boolean isVehicleTypeAllocated(String zoneId, String typeId) {
        System.out.println("url for vehicle type" + "https://umove-dev.stackroute.io/zoneservice/" +
                "api/v1/bookingConfirmed?zoneId=" + zoneId + "&typeId=" + typeId);

        HttpHeaders requestHeaders = new HttpHeaders();
        HttpEntity<?> requestEntity = new HttpEntity<Object>(requestHeaders);

        RestTemplate restTemplate = new RestTemplate();

        HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();
        restTemplate.setRequestFactory(requestFactory);

        restTemplate.getMessageConverters().add(new StringHttpMessageConverter());

        ResponseEntity<Map> response = restTemplate.exchange("https://umove-dev.stackroute.io/zoneservice/" +
                "api/v1/bookingConfirmed?zoneId=" + zoneId + "&typeId=" + typeId, HttpMethod.PATCH, requestEntity, Map.class);

        System.out.println("vehicle type count ka status" + response.getBody().get("status"));
        if(response.getBody().get("status").equals("Booked")) {
            return true;
        }
        return false;
    }

    @Override
    public synchronized boolean isVehicleAllocated(String registrationNo) {

        System.out.println("alocate vehicle url: " + "https://umove-dev.stackroute.io/zoneservice/" +
        "api/v1/onRideStart?registrationNo=" + registrationNo);

        HttpHeaders requestHeaders = new HttpHeaders();
        HttpEntity<?> requestEntity = new HttpEntity<Object>(requestHeaders);

        RestTemplate restTemplate = new RestTemplate();

        HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();
        restTemplate.setRequestFactory(requestFactory);

        restTemplate.getMessageConverters().add(new StringHttpMessageConverter());

        ResponseEntity<Map> response = restTemplate.exchange("https://umove-dev.stackroute.io/zoneservice/" +
        "api/v1/onRideStart?registrationNo=" + registrationNo, HttpMethod.PATCH, requestEntity, Map.class);

        if(response.getBody().get("status").equals("Booked")) {
            return true;
        }

        return false;
    }

    public TrackingLatitudeLongitude storeTrackingData(Ride ride) {
        TrackingLatitudeLongitude trackingLatitudeLongitude = new TrackingLatitudeLongitude();
        if(ride.getStatus().equals(RideStatus.Started))
        {
            LocalDateTime time = LocalDateTime.now();
            trackingLatitudeLongitude.setRideId(ride.get_id());
            trackingLatitudeLongitude.setRiderId(ride.getRider().get_id());
            trackingLatitudeLongitude.setLongitude(new ArrayList<>());
            trackingLatitudeLongitude.setLatitude(new ArrayList<>());
            trackingLatitudeLongitude.setVehicleNumber(ride.getVehicle().getRegistrationNo());
            trackingLatitudeLongitude.setSource(ride.getSourceZone().getLocality());
            for(Zone destZone : ride.getDestinationZones())
            {
                trackingLatitudeLongitude.setDestination(destZone.getLocality());
            }
            trackingLatitudeLongitude.setTimestamps(Collections.singletonList(time));
            System.out.println(trackingLatitudeLongitude);
        }
        System.out.println(trackingRepo.save(trackingLatitudeLongitude));
        return trackingRepo.save(trackingLatitudeLongitude);
    }

    @Override
    public TrackingLatitudeLongitude updateTrackingData(String rideId, String latitude, String longitude) {
        TrackingLatitudeLongitude trackingLatitudeLongitudeData = trackingRepo.findByRideId(rideId);
        LocalDateTime time = LocalDateTime.now();
        trackingLatitudeLongitudeData.getTimestamps().add(time);
        trackingLatitudeLongitudeData.getLatitude().add(Double.parseDouble(latitude));
        trackingLatitudeLongitudeData.getLongitude().add(Double.parseDouble(longitude));
        return trackingRepo.save(trackingLatitudeLongitudeData);
    }

    @Override
    public List<TrackingLatitudeLongitude> getAllTrackingData() {
        return trackingRepo.findAll();
    }

    public double calculateTotalDistance(String rideId)
    {
        TrackingLatitudeLongitude trackingLatitudeLongitudeData = trackingRepo.findByRideId(rideId);
        List<Double> latitude = trackingLatitudeLongitudeData.getLatitude();
        List<Double> longitude = trackingLatitudeLongitudeData.getLongitude();
        int size = latitude.size();
        System.out.println("size of list is"+size);
        double totalDistance = 0.0;
        int j;
        for(j=0;j<size-1 ;j++)
        {
            totalDistance += distance(   latitude.get(j),   latitude.get(j+1),   longitude.get(j),   longitude.get(j+1));
        }
        System.out.println("calculated total distance : " + totalDistance);
        return 0;
    }


    public double distance(double lat1, double lat2, double lon1, double lon2)
    {
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        double dlon;
        double dlat;

        lon1 = Math.toRadians(lon1);
        lon2 = Math.toRadians(lon2);
        lat1 = Math.toRadians(lat1);
        lat2 = Math.toRadians(lat2);

        // Haversine formula
        dlon = lon2 - lon1;
        dlat = lat2 - lat1;
        double a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1) * Math.cos(lat2)
                * Math.pow(Math.sin(dlon / 2),2);

        double c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles
        double r = 6371;

        // calculate the result
        return(c * r);

    }

}
