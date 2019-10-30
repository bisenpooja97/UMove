package in.stackroute.umove.zoneservice.service.impl;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class MessagingService {

    @RabbitListener(queues = "ride_confirmed")
    public void onRideConfirmedMessageReceived(Map<String, Object> map) {

        System.out.println("\n\n\nmessage aaya --> " + map + "\n\n\n");
    }

    @RabbitListener(queues = "ride_started")
    public void onRideStartedMessageReceived(Map<String, Object> map) {
    map.get("data");
        System.out.println("data");
        System.out.println("\n\n\nmessage aaya --> " + map + "\n\n\n");
    }

    @RabbitListener(queues = "ride_ended")
    public void onRideEndedMessageReceived(Map<String, Object> map) {
        System.out.println("\n\n\nmessage aaya --> " + map + "\n\n\n");
    }

    @RabbitListener(queues = "ride_cancelled")
    public void onRideCancelledMessageReceived(Map<String, Object> map) {
        System.out.println("\n\n\nmessage aaya --> " + map + "\n\n\n");
    }

}
