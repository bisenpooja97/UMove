package in.stackroute.umove.bookingservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.thymeleaf.spring3.SpringTemplateEngine;
import org.thymeleaf.spring3.templateresolver.SpringResourceTemplateResolver;

import java.nio.charset.StandardCharsets;

@Configuration
public class MailConfiguration
{
    @Bean
    public SpringTemplateEngine springTemplateEngine()
    {
        SpringTemplateEngine springTemplateEngine = new SpringTemplateEngine();
        springTemplateEngine.addTemplateResolver(htmlTemplateResolver());
        return  springTemplateEngine;
    }

    @Bean
    public SpringResourceTemplateResolver htmlTemplateResolver()
    {
        SpringResourceTemplateResolver springResourceTemplateResolver = new SpringResourceTemplateResolver();
        springResourceTemplateResolver.setPrefix("classpath:/templates/");
        springResourceTemplateResolver.setSuffix(".html");
        springResourceTemplateResolver.setTemplateMode("HTML5");
        springResourceTemplateResolver.setCharacterEncoding(StandardCharsets.UTF_8.name());
        return springResourceTemplateResolver;
    }
}
