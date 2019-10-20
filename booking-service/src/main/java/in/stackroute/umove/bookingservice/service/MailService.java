package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Mail;
import in.stackroute.umove.bookingservice.model.Ride;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.context.Context;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Service
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private SpringTemplateEngine springTemplateEngine;


    public void sendSimpleMessage(Mail mail, Ride ride, int discount_percent) throws MessagingException, IOException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
        Context context = new Context();
        context.setVariables( mail.getModel());
//      context.setVariable("name", ride.getRider().getName());
//      context.setVariable("distance", ride.getDistance());
//      context.setVariable("time", ride.getDuration());
//      context.setVariable("rideAmount", ride.getPaymentDetail().getRideAmount());
//      if(ride.getPaymentDetail().getTotalExtraCharges() != 0.0){context.setVariable("totalExtraCharges", ride.getPaymentDetail().getTotalExtraCharges());}
//      if(discount_percent != 0){ context.setVariable("discountPercent", discount_percent);
//        if(ride.getPaymentDetail().getFuelRefillAmount() != 0.0){context.setVariable("fuelRefillAmount", ride.getPaymentDetail().getFuelRefillAmount());}
//        context.setVariable("totalAmount", ride.getPaymentDetail().getTotalAmount());
//        context.setVariable("location", "Bangalore");
//        context.setVariable("signature", "UMOVE");
        String html = springTemplateEngine.process("email-template", context);
        mimeMessageHelper.setTo(mail.getTo());
        mimeMessageHelper.setText(html, true);
        mimeMessageHelper.setSubject(mail.getSubject());
        mimeMessageHelper.setFrom(mail.getFrom());
        javaMailSender.send(mimeMessage);
    }
}
