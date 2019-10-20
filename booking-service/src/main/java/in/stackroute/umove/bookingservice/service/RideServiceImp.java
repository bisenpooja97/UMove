package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.PaymentRepo;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RideServiceImp implements RideService {

    @Autowired
    private RideRepo rideRepo;
    @Autowired
    private PaymentRepo paymentRepo;
    @Autowired
    private MailService mailService;

    @Override
    public Ride confirmRide(Ride ride) {
        rideRepo.save(ride);
        return ride;
    }

    @Override
    public List<Ride> getAllRides() {
        return rideRepo.findAll();
    }

    @Override
    public Ride getRideById(ObjectId id) {
        Ride ride = rideRepo.findBy_id(id);
        if(ride.getPaymentDetail().getStatus().equals("Paid"))
        {
            return rideRepo.findBy_id(id);
        } else if(ride.getPaymentDetail().getStatus().equals("Pending")){
            return rideRepo.findBy_id(id);
        } else{
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
    public Payment payForRide(ObjectId rideId, String paymentId, String paymentStatus) throws IOException, MessagingException {
        Ride ride = rideRepo.findBy_id(rideId);
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
    public List<Payment> getPaymentDetails(String rideId) {
        List<Payment> payments = paymentRepo.findByRideId(rideId);
        return payments;

    }
}
