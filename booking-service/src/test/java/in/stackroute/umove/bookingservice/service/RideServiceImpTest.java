//package in.stackroute.umove.bookingservice.service;
//import in.stackroute.umove.bookingservice.model.*;
//import in.stackroute.umove.bookingservice.repo.PaymentRepo;
//import in.stackroute.umove.bookingservice.repo.RideRepo;
//import org.bson.types.ObjectId;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import javax.mail.MessagingException;
//import java.io.IOException;
//import java.time.LocalDateTime;
//
//import java.util.stream.Collectors;
//import java.util.stream.Stream;
//import static org.mockito.Mockito.when;
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class RideServiceImpTest {
//
//    @Autowired
//    RideService rideService;
//    @MockBean
//    RideRepo rideRepo;
//    @MockBean
//    PaymentRepo paymentRepo;
//
//
//
//    @Test
//    public void confirmRide() {
//        Ride ride = new Ride();
//        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
//        ride.setStatus(RideStatus.Confirmed);
//
//        User rider = new User();
//        rider.set_id("U1");
//        rider.setName("khushal");
//        rider.setEmail("khannakhushalkk@gmail.com");
//        rider.setMobileNumber("7569065907");
//        ride.setRider(rider);
//
//        Zone zone = new Zone();
//        zone.setId("Z1");
//        zone.setSupervisorId("S1");
//        zone.setSupervisorName("Mohan");
//        zone.setSupervisorEmail("Mohan@gmail.com");
//        zone.setSupervisorContactNo("7654797655");
//        zone.setLat(2.777777);
//        zone.setLon(2.666666);
//        zone.setLocality("Manyata");
//        zone.setCity("Bangalore");
//        zone.setState("karnataka");
//        zone.setCountry("India");
//        zone.setPincode(302017);
//
//        Vehicle vehicle = new Vehicle();
//        vehicle.set_id("V1");
//        vehicle.setRegistrationNo("RJ14J10");
//        vehicle.setName("Activa");
//        vehicle.setCostkm(30.0);
//        vehicle.setCosttime(4.0);
//        vehicle.setImageUrl("vehclemage");
//
//        PaymentDetail paymentDetail = new PaymentDetail();
//        paymentDetail.setStatus(PaymentStatus.Paid);
//        paymentDetail.setTotalAmount(100.0);
//        paymentDetail.setTotalExtraCharges(100.0);
//        paymentDetail.setFuelRefillAmount(100.0);
//        paymentDetail.setRideAmount(100.0);
//        ExtraCharge extraCharge = new ExtraCharge();
//        extraCharge.setChargedFor("Helmet");
//        extraCharge.setAmount(100.0);
//        paymentDetail.setExtraCharges(Stream.of(extraCharge).collect(Collectors.toList()));
//
//        PaymentMethod paymentMethod = new PaymentMethod();
//        paymentMethod.set_id("5d8c7a62adfffb7e746ccee8");
//        paymentMethod.setPaymentMethodNumber("PM12344");
//        paymentMethod.setPaymentType("Wallet");
//        paymentMethod.setPaymentProvider("Paytm");
//        Campaign campaign = new Campaign();
//        ride.setBookedAt(LocalDateTime.now());
//        ride.setRideStartAt(LocalDateTime.now());
//        ride.setRideEndAt(LocalDateTime.now());
//        ride.setDistance(2.0);
//        ride.setDuration(2);
//        ride.setDestinationZones(Stream.of(zone).collect(Collectors.toList()));
//        ride.setSourceZone(zone);
//        ride.setPaymentDetail(paymentDetail);
//        ride.setPaymentMethod(paymentMethod);
//        ride.setPromoCode(campaign);
//        assertEquals(ride, rideService.confirmRide(ride));
//    }
//
//    @Test
//    public void getAllRides() {
//        Ride ride = new Ride();
//        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
//        ride.setStatus(RideStatus.Confirmed);
//
//        User rider = new User();
//        rider.set_id("U1");
//        rider.setName("khushal");
//        rider.setEmail("khannakhushalkk@gmail.com");
//        rider.setMobileNumber("7569065907");
//        ride.setRider(rider);
//
//        Zone zone = new Zone();
//        zone.setId("Z1");
//        zone.setSupervisorId("S1");
//        zone.setSupervisorName("Mohan");
//        zone.setSupervisorEmail("Mohan@gmail.com");
//        zone.setSupervisorContactNo("7654797655");
//        zone.setLat(2.777777);
//        zone.setLon(2.666666);
//        zone.setLocality("Manyata");
//        zone.setCity("Bangalore");
//        zone.setState("karnataka");
//        zone.setCountry("India");
//        zone.setPincode(302017);
//
//        Vehicle vehicle = new Vehicle();
//        vehicle.set_id("V1");
//        vehicle.setRegistrationNo("RJ14J10");
//        vehicle.setName("Activa");
//        vehicle.setCostkm(30.0);
//        vehicle.setCosttime(4.0);
//        vehicle.setImageUrl("vehclemage");
//
//        PaymentDetail paymentDetail = new PaymentDetail();
//        paymentDetail.setStatus(PaymentStatus.Paid);
//        paymentDetail.setTotalAmount(100.0);
//        paymentDetail.setTotalExtraCharges(100.0);
//        paymentDetail.setFuelRefillAmount(100.0);
//        paymentDetail.setRideAmount(100.0);
//        ExtraCharge extraCharge = new ExtraCharge();
//        extraCharge.setChargedFor("Helmet");
//        extraCharge.setAmount(100.0);
//        paymentDetail.setExtraCharges(Stream.of(extraCharge).collect(Collectors.toList()));
//
//        PaymentMethod paymentMethod = new PaymentMethod();
//        paymentMethod.set_id("5d8c7a62adfffb7e746ccee8");
//        paymentMethod.setPaymentMethodNumber("PM12344");
//        paymentMethod.setPaymentType("Wallet");
//        paymentMethod.setPaymentProvider("Paytm");
//        Campaign campaign = new Campaign();
//        ride.setBookedAt(LocalDateTime.now());
//        ride.setRideStartAt(LocalDateTime.now());
//        ride.setRideEndAt(LocalDateTime.now());
//        ride.setDistance(2.0);
//        ride.setDuration(2);
//        ride.setDestinationZones(Stream.of(zone).collect(Collectors.toList()));
//        ride.setSourceZone(zone);
//        ride.setPaymentDetail(paymentDetail);
//        ride.setPaymentMethod(paymentMethod);
//        ride.setPromoCode(campaign);
//
//        when(rideRepo.findAll()).thenReturn(Stream.of(ride).collect(Collectors.toList()));
//        assertEquals(1, rideService.getAllRides().size());
//    }
//
//    @Test
//    public void getRideById() {
//        Ride ride = new Ride();
//        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
//        ride.setStatus(RideStatus.Confirmed);
//
//        User rider = new User();
//        rider.set_id("U1");
//        rider.setName("khushal");
//        rider.setEmail("khannakhushalkk@gmail.com");
//        rider.setMobileNumber("7569065907");
//        ride.setRider(rider);
//
//        Zone zone = new Zone();
//        zone.setId("Z1");
//        zone.setSupervisorId("S1");
//        zone.setSupervisorName("Mohan");
//        zone.setSupervisorEmail("Mohan@gmail.com");
//        zone.setSupervisorContactNo("7654797655");
//        zone.setLat(2.777777);
//        zone.setLon(2.666666);
//        zone.setLocality("Manyata");
//        zone.setCity("Bangalore");
//        zone.setState("karnataka");
//        zone.setCountry("India");
//        zone.setPincode(302017);
//
//        Vehicle vehicle = new Vehicle();
//        vehicle.set_id("V1");
//        vehicle.setRegistrationNo("RJ14J10");
//        vehicle.setName("Activa");
//        vehicle.setCostkm(30.0);
//        vehicle.setCosttime(4.0);
//        vehicle.setImageUrl("vehclemage");
//
//        PaymentDetail paymentDetail = new PaymentDetail();
//        paymentDetail.setStatus(PaymentStatus.Paid);
//        paymentDetail.setTotalAmount(100.0);
//        paymentDetail.setTotalExtraCharges(100.0);
//        paymentDetail.setFuelRefillAmount(100.0);
//        paymentDetail.setRideAmount(100.0);
//        ExtraCharge extraCharge = new ExtraCharge();
//        extraCharge.setChargedFor("Helmet");
//        extraCharge.setAmount(100.0);
//        paymentDetail.setExtraCharges(Stream.of(extraCharge).collect(Collectors.toList()));
//
//        PaymentMethod paymentMethod = new PaymentMethod();
//        paymentMethod.set_id("5d8c7a62adfffb7e746ccee8");
//        paymentMethod.setPaymentMethodNumber("PM12344");
//        paymentMethod.setPaymentType("Wallet");
//        paymentMethod.setPaymentProvider("Paytm");
//        Campaign campaign = new Campaign();
//        ride.setBookedAt(LocalDateTime.now());
//        ride.setRideStartAt(LocalDateTime.now());
//        ride.setRideEndAt(LocalDateTime.now());
//        ride.setDistance(2.0);
//        ride.setDuration(2);
//        ride.setDestinationZones(Stream.of(zone).collect(Collectors.toList()));
//        ride.setSourceZone(zone);
//        ride.setPaymentDetail(paymentDetail);
//        ride.setPaymentMethod(paymentMethod);
//        ride.setPromoCode(campaign);
//
//        when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e"))).thenReturn(ride);
//        assertEquals(ride, rideService.getRideById(new ObjectId("5d89c3cf651a913a1cf2d31e")));
//
//
//    }
//
//
//    @Test
//    public void payForRide() throws IOException, MessagingException {
//        Payment payment = new Payment();
//        payment.setRideId("5d89c3cf651a913a1cf2d31e");
//        payment.setUserId("5d89c3c323a913a1cf2d31e");
//        payment.setDeductedAt(LocalDateTime.now());
//        payment.setAmountPaid(100.0);
//        payment.setExtraCharges(100.0);
//        payment.setStatus("Paid");
//        payment.setDiscountPercent(10);
//        payment.setDistance(4.0);
//        payment.setDuration(2);
//        payment.setPaymentMethodId("PM1");
//        payment.setRideFare(100.0);
//
//        assertEquals(payment, rideService.payForRide( new ObjectId("5d89c3cf651a913a1cf2d31e"),"PM1","Paid" ));
//    }
//
//    @Test
//    public void getPaymentDetails() {
//        Payment payment = new Payment();
//        payment.setRideId("5d89c3cf651a913a1cf2d31e");
//        payment.setUserId("5d89c3c323a913a1cf2d31e");
//        payment.setDeductedAt(LocalDateTime.now());
//        payment.setAmountPaid(100.0);
//        payment.setExtraCharges(100.0);
//        payment.setDiscountPercent(10);
//        payment.setDistance(4.0);
//        payment.setDuration(2);
//        payment.setPaymentMethodId("PM1");
//        payment.setRideFare(100.0);
//
//        when(paymentRepo.findAll()).thenReturn(Stream.of(payment).collect(Collectors.toList()));
//        assertEquals(1, rideService.getPaymentDetails(payment.getRideId()).size());
//    }
//}
