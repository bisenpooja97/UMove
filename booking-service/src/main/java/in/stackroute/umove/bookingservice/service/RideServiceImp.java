package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.ExtraCharge;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RideServiceImp implements RideService
{
    @Autowired
    private RideRepo rideRepo;

    @Override
    public List<Ride> getRidesByUserId(String userId) {
        return rideRepo.findByUserId(userId);
    }

    @Override
    public List<Ride> getAllRides() {
        return rideRepo.findAll();
    }

    @Override
    public Ride getRidesById(ObjectId id) {
        Ride ride = rideRepo.findBy_id(id);
        double totalExtraCharges = calculateTotalExtraCharges(ride);
        ride.getPayment().setTotalExtraCharges(totalExtraCharges);
        rideRepo.save(ride);
        return ride;

    }

    @Override
    public Ride confirmBooking(Ride ride) {
        return rideRepo.save(ride);
    }

    private double calculateTotalExtraCharges(Ride ride) {
        List<ExtraCharge> extraCharges = ride.getPayment().getExtraCharges();
        return extraCharges.stream().mapToDouble(f -> f.getAmount() ).sum();
    }
}
