FROM alpine/git as clone
WORKDIR /app
RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/umove /app
RUN mvn clean install -f report-service/pom.xml -DskipTests=true

FROM openjdk:8-jre-alpine
ENV PORT=8096
ENV DISCOVERY_URL="http://discovery:8761"
WORKDIR /app
COPY --from=build /app/report-service/target/report-service.jar /app
EXPOSE 8096
CMD ["java", "-jar", "report-service.jar"]
