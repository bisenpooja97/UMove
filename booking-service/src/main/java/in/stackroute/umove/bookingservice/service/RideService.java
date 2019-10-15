package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.ExtraCharge;
import in.stackroute.umove.bookingservice.model.Payment;
import in.stackroute.umove.bookingservice.model.PaymentDetail;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.repo.PaymentRepo;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RideService implements RideServiceImp {

    @Autowired
    private RideRepo rideRepo;
    @Autowired
    private PaymentRepo paymentRepo;


    @Override
    public Ride confirmBooking(Ride ride) {
        rideRepo.save(ride);
        return ride;
    }

    @Override
    public List<Ride> getAllBookings() {
        return rideRepo.findAll();
    }

    @Override
    public Ride getBookingById(ObjectId id) {
        Ride ride = rideRepo.findBy_id(id);
        double totalExtraCharges = calculateTotalExtraCharges(ride);
        int totalAmount = calculateRideAmount(ride);
        ride.getPayment().setTotalExtraCharges(totalExtraCharges);
        ride.getPayment().setTotalAmount((double) totalAmount);
        rideRepo.save(ride);
        return rideRepo.findBy_id(id);
    }

    private double calculateTotalExtraCharges(Ride ride) {
        List<ExtraCharge> extraCharges = ride.getPayment().getExtraCharges();
        return extraCharges.stream().mapToDouble(f -> f.getAmount() ).sum();
    }

    private int calculateRideAmount(Ride ride) {
        double rideAmount = ride.getPayment().getRideAmount();
        int totalAmount = (int)((rideAmount)- (ride.getPayment().getPetrolCharges()));
        totalAmount =(int) (totalAmount - ((ride.getPromoCode().getDiscountPercent()* totalAmount)/100));
        return totalAmount;
    }

    @Override
    public Payment payForBooking(ObjectId rideId, String paymentId) {
        Ride ride = rideRepo.findBy_id(rideId);
        String rider = ride.getRider().getName();
        Long mobile = ride.getRider().getMobile();
        String source = ride.getSourceZone().getLocality();
        int sizeOfDestinationZones = ride.getDestinationZones().size();
        String destination = ride.getDestinationZones().get(sizeOfDestinationZones-1).getLocality();
        Double distance = ride.getDistance();
        int duration = ride.getDuration();
        String payment_method_id = ride.getPaymentMethod().get_id();
        Double ride_fare = ride.getPayment().getRideAmount();
        int discount_percent = ride.getPromoCode().getDiscountPercent();
        Double totalExtraCharges = ride.getPayment().getTotalExtraCharges();
        Double amount_paid = ride.getPayment().getTotalAmount();
        LocalDateTime deducted_at = LocalDateTime.now();
        PaymentDetail paymentDetail = ride.getPayment();
        paymentDetail.setStatus("Paid");
        paymentDetail.setPaidAmount(amount_paid);
        ride.setPayment(paymentDetail);
        rideRepo.save(ride);

        Payment payment = new Payment();
        payment.setBookingId(rideId.toString());
        payment.setPaymentId(paymentId);
        payment.setRider(rider);
        payment.setMobile(mobile);
        payment.setSource(source);
        payment.setDestination(destination);
        payment.setDistance(distance);
        payment.setDuration(duration);
        payment.setPayment_method_id(payment_method_id);
        payment.setRide_fare(ride_fare);
        payment.setDiscount_percent(discount_percent);
        payment.setExtra_charges(totalExtraCharges);
        payment.setAmount_paid(amount_paid);
        payment.setDeducted_at(deducted_at);
        payment.setStatus("Paid");
        paymentRepo.save(payment);
        return payment;
    }

    @Override
    public Payment getPaymentDetails(String rideId) {
        Payment payment = paymentRepo.findByBookingId(rideId);
        return payment;

    }
}
