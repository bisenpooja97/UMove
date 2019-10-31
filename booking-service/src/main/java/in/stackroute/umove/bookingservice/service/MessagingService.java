package in.stackroute.umove.bookingservice.service;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class MessagingService {

    @RabbitListener(queues = "user_status")
    public void onUserStatusChanged(Map<String, Object> userDetail) {
        System.out.println("\n\n\nUser Status Updated --> " + userDetail + "\n\n\n");
    }

}
