package in.stackroute.umove.vehicleservice.config;

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
public class MessagingConfiguration extends SpringBootServletInitializer implements RabbitListenerConfigurer {

    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(MessagingConfiguration.class);
    }

    @Bean("ride_confirmed")
    Queue rideConfirmedQueue() {
        return new Queue("ride_confirmed", false);
    }

    @Bean
    TopicExchange vehicleExchange() {
        return new TopicExchange("vehicle_exchange");
    }

    @Bean
    TopicExchange bookingExchange() {
        return new TopicExchange("booking_exchange");
    }

    @Bean
    @Qualifier("vehicle_booking_binding")
    Binding vehicleBookingBinding(TopicExchange vehicleExchange, TopicExchange bookingExchange) {
        return BindingBuilder.bind(vehicleExchange).to(bookingExchange).with("ride_confirmed");
    }

    @Bean
    @Qualifier("ride_confirmed_vehicle_binding")
    Binding rideConfirmedVehicleBinding(Queue rideConfirmedQueue, TopicExchange vehicleExchange) {
        return BindingBuilder.bind(rideConfirmedQueue).to(vehicleExchange).with("ride_confirmed");
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
