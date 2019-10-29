#FROM alpine/git as clone
#WORKDIR /app
#RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git
#
#FROM maven:3.5-jdk-8-alpine as build
#WORKDIR /app
#COPY --from=clone /app/umove /app
#RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline -f booking-service/pom.xml
##RUN mvn dependency:go-offline -B -f api-gateway/pom.xml
#RUN mvn -Dmaven.repo.local=$HOME/.m2 -f booking-service/pom.xml clean package -DskipTests
##RUN mvn clean install -f api-gateway/pom.xml -DskipTests=true
#
#FROM openjdk:8-jre-alpine
#ENV PORT=8094
#ENV DISCOVERY_URL="http://discovery:8761"
#WORKDIR /app
#COPY --from=build /app/booking-service/target/booking-service.jar /app
#EXPOSE 8094
#CMD ["java", "-jar", "booking-service.jar"]


#FROM maven:3.5-jdk-8-alpine AS build
#COPY pom.xml .
#RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline
#COPY src src
#RUN mvn -Dmaven.repo.local=$HOME/.m2 -f pom.xml clean package
# RUN mvn -f pom.xml clean package -DskipTests
FROM openjdk:8-jre-alpine
EXPOSE 8091
ADD /target/ride-service.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
