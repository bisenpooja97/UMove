# UMove - Bike Allocation

> Example of a microservice architecture using Spring Cloud

## Overview

The architecture is composed by eight services:

- `discovery-service`: Service Discovery Server created with **Eureka**
- `api-gateway`: API Gateway created with **Zuul** that uses the `discovery-service` to send the requests to the services. It uses **Ribbon** as Load Balancer
- `user-service`: REST service created with **Spring Boot** for User related services
- `vehicle-service`: REST service created with **Spring Boot** for Vehicle related services
- `zone-service`: Simple REST service created with **Spring Boot** for Zones related services
- `ride-service`: Simple REST service created with **Spring Boot** for ride related services
- `help-service`: Simple REST service created with **Spring Boot** for help related services
- `report-service`: Simple REST service created with **Spring Boot** for generating reports for all the data

The services are already configured with **Hystrix (latency and fault tolerance library)** and are providing a **stream** that you can use to monitor with a **Hystrix/Turbine** dashboard. You can check the **Hystrix Stream** accessing the service URL with `/hystrix.stream` (example: `http://localhost:8765/hystrix.stream`)

## How to use

To test this architecture you will need to have: **JDK 8+**, **Docker** and **Maven** installed

- Clone this repo and enter it

- Run the `start.sh` script, it will use **Maven** to build the `.jar` file for each service and then use Docker to build the containers with the `.jar` files

In the default configuration you will have:

- **Discovery Service** running on port `8761`, access `http://localhost:8761` to see the dashboard
- **API Gateway** running on port `8765`, you will send the requests to this service
- **User Services** running on ports: `8091`
- **Vehicle Services** running on ports: `8092`
- **Zone Services** running on ports: `8093`
- **Booking Services** running on ports: `8094`
- **Help Services** running on ports: `8095`
- **Report Services** running on ports: `8096`

After running the containers, head to `http://localhost:8761` to make sure that the four services are registered in the **Discovery Service**.
