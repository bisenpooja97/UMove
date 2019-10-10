FROM alpine/git as clone
WORKDIR /app
RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/umove /app
RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline -f umove-admin-ui/pom.xml
#RUN mvn dependency:go-offline -B -f api-gateway/pom.xml
RUN mvn -Dmaven.repo.local=$HOME/.m2 -f umove-admin-ui/pom.xml clean package -DskipTests
RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline -f admin-webapp/pom.xml
#RUN mvn dependency:go-offline -B -f api-gateway/pom.xml
RUN mvn -Dmaven.repo.local=$HOME/.m2 -f admin-webapp/pom.xml clean package -DskipTests
#RUN mvn clean install -f api-gateway/pom.xml -DskipTests=true

FROM openjdk:8-jre-alpine
ENV PORT=8097
ENV DISCOVERY_URL="http://discovery:8761"
WORKDIR /app
COPY --from=build /app/admin-webapp/target/admin-webapp.jar /app
EXPOSE 8097
CMD ["java", "-jar", "admin-webapp.jar"]

## Alpine because it's lighter
#FROM openjdk:8-jdk-alpine
#MAINTAINER Vishnu Bochiwal <bochiwal.visnu@gmail.com>
#
## Set ENV variables
#ENV PORT=8080
#ENV DISCOVERY_URL="http://discovery:8761"
#
## Add JAR file and run it as entrypoint
#ADD target/api-gateway.jar app.jar
#ENTRYPOINT ["java", "-jar", "/app.jar"]
#
## Expose the port
#EXPOSE 8080
