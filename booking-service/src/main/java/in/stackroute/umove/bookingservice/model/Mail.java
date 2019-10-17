package in.stackroute.umove.bookingservice.model;

import lombok.*;

import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Mail
{
    private String from;
    private String to;
    private String subject;
    private String content;
    private Map< String, Object > model;
}

