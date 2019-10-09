FROM alpine/git as clone
WORKDIR /app
RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/umove /app
RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline -f discovery-service/pom.xml
#RUN mvn dependency:go-offline -B -f api-gateway/pom.xml
RUN mvn -Dmaven.repo.local=$HOME/.m2 -f discovery-service/pom.xml clean package -DskipTests
#RUN mvn clean install -f api-gateway/pom.xml -DskipTests=true

FROM openjdk:8-jre-alpine
ENV PORT=8761
WORKDIR /app
COPY --from=build /app/discovery-service/target/discovery-service.jar /app
EXPOSE 8761
CMD ["java", "-jar", "discovery-service.jar"]
