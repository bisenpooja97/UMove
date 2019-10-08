FROM alpine/git as clone
WORKDIR /app
RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/umove /app
RUN mvn dependency:go-offline -B -f api-gateway/pom.xml
RUN mvn clean install -f api-gateway/pom.xml -DskipTests=true

FROM openjdk:8-jre-alpine
ENV PORT=8080
ENV DISCOVERY_URL="http://discovery:8761"
WORKDIR /app
COPY --from=build /app/api-gateway/target/api-gateway.jar /app
EXPOSE 8080
CMD ["java", "-jar", "api-gateway.jar"]
