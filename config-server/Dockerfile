#FROM alpine/git as clone
#WORKDIR /app
#RUN git clone https://oauth2:6Crzz8qTF-dNKvxYYAFY@gitlab-ibm.stackroute.in/vbochiw1/umove.git
#
#FROM maven:3.5-jdk-8-alpine as build
#WORKDIR /app
#COPY --from=clone /app/umove /app
#RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline -f config-server/pom.xml
##RUN mvn dependency:go-offline -B -f api-gateway/pom.xml
#RUN mvn -Dmaven.repo.local=$HOME/.m2 -f config-server/pom.xml clean package -DskipTests
##RUN mvn clean install -f api-gateway/pom.xml -DskipTests=true
#
#FROM openjdk:8-jre-alpine
#ENV PORT=8888
#WORKDIR /app
#COPY --from=build /app/config-server/target/config-server.jar /app
#EXPOSE 8888
#CMD ["java", "-jar", "config-server.jar"]


#FROM maven:3.5-jdk-8-alpine AS build
#COPY pom.xml .
#RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline
#COPY src src
#RUN mvn -Dmaven.repo.local=$HOME/.m2 -f pom.xml clean package
# RUN mvn -f pom.xml clean package -DskipTests
FROM openjdk:8-jre-alpine
EXPOSE 8888
ADD /target/config-server.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]

