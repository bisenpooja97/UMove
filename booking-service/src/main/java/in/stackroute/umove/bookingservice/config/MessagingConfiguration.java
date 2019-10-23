package in.stackroute.umove.bookingservice.config;


import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.handler.annotation.support.DefaultMessageHandlerMethodFactory;


@Configuration
public class MessagingConfiguration extends SpringBootServletInitializer implements RabbitListenerConfigurer
{
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(MessagingConfiguration.class);
    }

    @Bean
    TopicExchange bookingExchange() {
        return new TopicExchange("booking_exchange");
    }

    @Bean
    TopicExchange userExchange() {
        return new TopicExchange("user_exchange");
    }

    @Bean()
    Queue userStatusQueue() {
        return new Queue("user_status", false);
    }

    @Bean
    @Qualifier("booking_user_binding")
    Binding vehicleBookingBinding(TopicExchange bookingExchange, TopicExchange userExchange) {
        return BindingBuilder.bind(bookingExchange).to(userExchange).with("ride_confirmed");
    }

    @Bean
    @Qualifier("user_status_booking_binding")
    Binding rideConfirmedVehicleBinding(Queue userStatusQueue, TopicExchange bookingExchange) {
        return BindingBuilder.bind(userStatusQueue).to(bookingExchange).with("user_status");
    }

    /* Bean for rabbitTemplate */
    @Bean
    @Qualifier("rabbitTemplate")
    public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(producerJackson2MessageConverter());
        return rabbitTemplate;
    }

    @Bean
    public Jackson2JsonMessageConverter producerJackson2MessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public MappingJackson2MessageConverter consumerJackson2MessageConverter() {
        return new MappingJackson2MessageConverter();
    }

    @Bean
    public DefaultMessageHandlerMethodFactory messageHandlerMethodFactory() {
        DefaultMessageHandlerMethodFactory factory = new DefaultMessageHandlerMethodFactory();
        factory.setMessageConverter(consumerJackson2MessageConverter());
        return factory;
    }

    @Override
    public void configureRabbitListeners(final RabbitListenerEndpointRegistrar registrar) {
        registrar.setMessageHandlerMethodFactory(messageHandlerMethodFactory());
    }


}
