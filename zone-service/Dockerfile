FROM alpine/git as clone
WORKDIR /app
RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/umove /app
RUN mvn clean install -f zone-service/pom.xml -DskipTests=true

FROM openjdk:8-jre-alpine
ENV PORT=8093
ENV DISCOVERY_URL="http://discovery:8761"
WORKDIR /app
COPY --from=build /app/zone-service/target/zone-service.jar /app
EXPOSE 8093
CMD ["java", "-jar", "zone-service.jar"]
