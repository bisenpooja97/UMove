package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.ExtraCharge;
import in.stackroute.umove.bookingservice.model.PaymentDetail;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RideServiceImp implements RideService {
    @Autowired
    private RideRepo rideRepo;

    @Override
    public Ride cofirmBooking(Ride ride) {
        PaymentDetail paymentDetail = new PaymentDetail();
        paymentDetail.setExtraCharges(new ArrayList<>());
        ride.setPayment(paymentDetail);
        rideRepo.save(ride);
        return ride;
    }

    @Override
    public List<Ride> getAllBookings() {
        return rideRepo.findAll();
    }

    @Override
    public Ride getBookingById(ObjectId id) {
        return rideRepo.findBy_id(id);
    }

    @Override
    public Map<String, Object> deleteAll() {
        rideRepo.deleteAll();
        return null;
    }

    @Override
    public Ride getBookingsByUserIdNStatus(String userId, String bookingStatus){
        Ride booking = rideRepo.findByUserIdNStatus(userId, bookingStatus);
        return booking;
    }

    @Override
    public Ride addExtraCharges(ObjectId bookingId, List<ExtraCharge> extraCharges) {
        Ride booking = rideRepo.findBy_id(bookingId);
        booking.getPayment().setExtraCharges(extraCharges);
        rideRepo.save(booking);
        return booking;
    }
}
