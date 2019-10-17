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
        return rideRepo.findRidesByUserId(userId);
    }

    @Override
    public List<Ride> getAllRides() {
        return rideRepo.findAll();
    }

    @Override
    public Ride getRidesById(ObjectId id) {
        return rideRepo.findBy_id(id);
    }

    @Override
    public Ride confirmRide(Ride ride) {
        return rideRepo.save(ride);
    }
}
