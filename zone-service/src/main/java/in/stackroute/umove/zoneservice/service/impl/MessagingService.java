package in.stackroute.umove.zoneservice.service.impl;

import in.stackroute.umove.zoneservice.model.Vehicle;
import in.stackroute.umove.zoneservice.model.VehicleStatus;
import in.stackroute.umove.zoneservice.model.ZoneTypeCount;
import in.stackroute.umove.zoneservice.repository.VehicleRepo;
import in.stackroute.umove.zoneservice.repository.ZoneTypeCountRepo;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Map;

@Service
public class MessagingService {

    @Autowired
    private ServiceZoneImpl serviceZoneDummy;

    @Autowired
    private  VehicleImpl vehicle;

    @Autowired
    private ZoneTypeCountImpl zoneTypeCount;

    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private ZoneTypeCountRepo zoneTypeCountRepo;

    @RabbitListener(queues = "ride_started")
    public void onRideStartedMessageReceived(Map<String, Object> map) {
        Vehicle list = vehicle.findByRegistrationNo((String) map.get("registrationNo"));
        list.setZoneId(null);
        list.setStatus(VehicleStatus.Busy);
        vehicleRepo.save(list);
        }

    @RabbitListener(queues = "ride_ended")
    public void onRideEndedMessageReceived(Map<String, Object> map) {
        Vehicle list = vehicle.findByRegistrationNo((String) map.get("registrationNo"));
        System.out.println(list + " " + list.getZoneId());
        list.setZoneId((String) map.get("destinationId"));
        list.setStatus(VehicleStatus.Free);
        vehicleRepo.save(list);
        ZoneTypeCount zoneTypeCount1 = zoneTypeCount.getZoneType((String) map.get("destinationId"),
                (String) map.get("typeId"));
        if(zoneTypeCount1 == null) {
            zoneTypeCount1.setZoneId((String) map.get("destinationId"));
            zoneTypeCount1.setTypeId((String) map.get("typeId"));
            zoneTypeCount1.setTypeName((String) map.get("typeName"));
            zoneTypeCount1.setCount(1);
            zoneTypeCountRepo.save(zoneTypeCount1);

        } else {
            zoneTypeCount1.setCount(zoneTypeCount1.getCount() + 1);
            zoneTypeCountRepo.save(zoneTypeCount1);
        }
    }

    @RabbitListener(queues = "ride_cancelled")
    public void onRideCancelledMessageReceived(Map<String, Object> map) {
        ZoneTypeCount zoneTypeCount1 = zoneTypeCount.getZoneType((String) map.get("srcZone"),
                (String) map.get("typeId"));
            zoneTypeCount1.setCount(zoneTypeCount1.getCount() + 1);
            zoneTypeCountRepo.save(zoneTypeCount1);
        }
    }


