package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.ExtraCharge;
import in.stackroute.umove.bookingservice.model.LatLongData;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.TrackingLatitudeLongitude;
import org.bson.types.ObjectId;

import java.util.List;

public interface RideService {
    Ride startRide(ObjectId rideId, String registrationNo);
    Ride addExtraCharges(ObjectId bookingId, List<ExtraCharge> extraCharges);
    TrackingLatitudeLongitude updateTrackingData(String rideId, String latitude, String longitude);
    List<TrackingLatitudeLongitude> getAllTrackingData();
    Ride confirmRide(Ride ride);
}

