package in.stackroute.umove.bookingservice.service;


//import in.stackroute.umove.bookingservice.model.TrackingLatitudeLongitude;
//import in.stackroute.umove.bookingservice.repo.RideRepo;
//import in.stackroute.umove.bookingservice.repo.TrackingRepo;
//import org.bson.types.ObjectId;
//import org.joda.time.LocalDateTime;
//import org.junit.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.mock.mockito.MockBean;
//
//import java.util.Date;
//import java.util.stream.Collectors;
//import java.util.stream.Stream;
//
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.when;

//
//public class RideServiceImpTest {
//
//    @Autowired
//    private RideServiceImp rideServiceImp;
//
//    @MockBean
//    private RideRepo rideRepo;
//
//    @MockBean
//    private TrackingRepo trackingRepo;
//
//    @Test
//    public void confirmRide() {
//
//    }
//
//    @Test
//    public void startRide() {
//    }
//
//    @Test
//    public void addExtraCharges() {
//    }
//
//    @Test
//    public void storeTrackingData() {
//        TrackingLatitudeLongitude trackingLatitudeLongitude = new TrackingLatitudeLongitude();
//        trackingLatitudeLongitude.setRideId("5dadf698149b3f00017038e3");
//        trackingLatitudeLongitude.setRiderId("5d8bbc0da6e87d5404aa1921");
//        trackingLatitudeLongitude.setTrackingId(new ObjectId("5d95e0d7bb6df3211fadf554"));
//        trackingLatitudeLongitude.setSource("Manyata");
//        trackingLatitudeLongitude.setDestination("Kormangla");
//        trackingLatitudeLongitude.setLatitude(Stream.of(12.8859).collect(Collectors.toList()));
//        trackingLatitudeLongitude.setLongitude(Stream.of(57.8859).collect(Collectors.toList()));
//        trackingLatitudeLongitude.setTimestamps(Stream.of(new Date()).collect(Collectors.toList()));
//        trackingLatitudeLongitude.setVehicleNumber("RJ143567");
//        when(trackingRepo.save(trackingLatitudeLongitude)).thenReturn(trackingLatitudeLongitude);
//        assertEquals(trackingLatitudeLongitude, rideServiceImp.storeTrackingData(trackingLatitudeLongitude));
//    }
//
//    @Test
//    public void updateTrackingData() {
//    }
//
//    @Test
//    public void getAllTrackingData() {
//        TrackingLatitudeLongitude trackingLatitudeLongitude = new TrackingLatitudeLongitude();
//        trackingLatitudeLongitude.setRideId("5dadf698149b3f00017038e3");
//        trackingLatitudeLongitude.setRiderId("5d8bbc0da6e87d5404aa1921");
//        trackingLatitudeLongitude.setTrackingId(new ObjectId("5d95e0d7bb6df3211fadf554"));
//        trackingLatitudeLongitude.setSource("Manyata");
//        trackingLatitudeLongitude.setDestination("Kormangla");
//        trackingLatitudeLongitude.setLatitude(Stream.of(12.8859).collect(Collectors.toList()));
//        trackingLatitudeLongitude.setLongitude(Stream.of(57.8859).collect(Collectors.toList()));
//        trackingLatitudeLongitude.setTimestamps(Stream.of(new Date()).collect(Collectors.toList()));
//        trackingLatitudeLongitude.setVehicleNumber("RJ143567");
//        when(trackingRepo.findAll()).thenReturn(Stream.of(trackingLatitudeLongitude).collect(Collectors.toList()));
//        assertEquals(1,rideServiceImp.getAllTrackingData().size());
//
//    }
//
//    @Test
//    public void calculateTotalDistance() {
//    }
//
//    @Test
//    public void distance() {
//    }
//}
