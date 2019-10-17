package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring3.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.naming.Context;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Service
public class EmailService
{
//    @Autowired
//    private JavaMailSender javaMailSender;
//    @Autowired
//    private SpringTemplateEngine springTemplateEngine;
//
//
//    public void sendSimpleMessage(Mail mail) throws MessagingException, IOException {
//        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
//        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
//        Context context = new Context();
//        context.setVariables(mail.getModel());
//        String message  ="Ride Recipt";
//        String html = springTemplateEngine.process("email-template", context);
//        mimeMessageHelper.setTo(mail.getTo());
//        mimeMessageHelper.setText(html, true);
//        mimeMessageHelper.setSubject(mail.getSubject());
//        mimeMessageHelper.setFrom(mail.getFrom());
//        javaMailSender.send(mimeMessage);
//
//
//    }
}

