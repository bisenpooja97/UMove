FROM alpine/git as clone
WORKDIR /app
RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/umove /app
RUN mvn dependency:go-offline -B -f config-server/pom.xml
RUN mvn clean package -f config-server/pom.xml -DskipTest=true

FROM openjdk:8-jre-alpine
ENV PORT=8888
WORKDIR /app
COPY --from=build /app/config-server/target/config-server.jar /app
EXPOSE 8888
CMD ["java", "-jar", "config-server.jar"]