//package in.stackroute.umove.bookingservice.controller;
//
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import in.stackroute.umove.bookingservice.model.*;
//import in.stackroute.umove.bookingservice.service.RideServiceImp;
//import org.bson.types.ObjectId;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.springframework.http.MediaType;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MockMvcBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import java.lang.Exception;
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.stream.Collectors;
//import java.util.stream.Stream;
//
//import static org.mockito.Mockito.when;
//import static org.mockito.Mockito.when;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(value = RideController.class, secure = false)
//public class RideControllerTest {
//
//    @MockBean
//    private RideServiceImp rideServiceImp;
//    private MockMvc mockMvc;
//    private Ride ride;
//    private List<Ride>  rideList;
//    private Payment payment;
//    private List<Payment> paymentList;
//    @InjectMocks
//    private RideController rideController;
//
//
//
//    @Before
//    public void setUp() throws Exception{
//        rideList = new ArrayList<Ride>();
//        MockitoAnnotations.initMocks(this);
//        mockMvc = MockMvcBuilders.standaloneSetup(rideController).build();
//        ride = new Ride();
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
//        rideList.add(ride);
//
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
//        paymentList.add(payment);
//    }
//    @Test
//    public void confirmBooking() throws Exception{
//        when(rideServiceImp.confirmRide(ride)).thenReturn(ride);
//        mockMvc.perform(MockMvcRequestBuilders.post("api/v1/rides")
//        .contentType(MediaType.APPLICATION_JSON)
//        .content(jsonToString(ride)))
//                .andExpect(MockMvcResultMatchers.status().isCreated())
//                .andDo(MockMvcResultHandlers.print());
//    }
//
//    @Test
//    public void getBookings() throws Exception{
//        when(rideServiceImp.getAllRides()).thenReturn(rideList);
//        mockMvc.perform(get("api/v1/rides")
//        .contentType(MediaType.APPLICATION_JSON)
//        .contentType(jsonToString(ride)))
//                .andExpect(status().isOk())
//                .andDo(print());
//
//    }
//
//    @Test
//    public void getBookingById() {
//     }
//
//    @Test
//    public void payForBooking() {
//    }
//
//    @Test
//    public void getPaymentDetails() throws Exception {
//        when(rideServiceImp.getPaymentDetails("5d89c3cf651a913a1cf2d31e")).thenReturn(paymentList);
//        mockMvc.perform(get("api/v1/rides")
//                .contentType(MediaType.APPLICATION_JSON)
//                .contentType(jsonToString(payment)))
//                .andExpect(status().isOk())
//                .andDo(print());
//
//    }
//
//    private static String jsonToString(final Object ob) throws JsonProcessingException {
//        String result;
//        try {
//            ObjectMapper mapper = new ObjectMapper();
//            String jsonContent = mapper.writeValueAsString(ob);
//            result = jsonContent;
//        } catch(JsonProcessingException e) {
//            result = "JSON processing error";
//        }
//        return result;
//    }
//
//}
