package in.stackroute.umove.vehicleservice.service.impl;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class MessagingService {

    @RabbitListener(queues = "ride_confirmed")
    public void onMessageReceived(Map<String, Object> map) {
        System.out.println("\n\n\nmessage aaya --> " + map + "\n\n\n");
    }

}
