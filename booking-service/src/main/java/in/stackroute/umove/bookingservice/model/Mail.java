package in.stackroute.umove.bookingservice.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Mail {
    private String from;
    private String to;
    private String subject;
    private String content;
    private Map< String, Object > model;
}
