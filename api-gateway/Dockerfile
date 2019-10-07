FROM alpine/git as clone
WORKDIR /app
RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/umove /app
RUN mvn clean install -f api-gateway/pom.xml

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=build /app/api-gateway/target/api-gateway.jar /app
EXPOSE 8765
CMD ["java -jar api-gateway.jar"]
