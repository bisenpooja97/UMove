#!/bin/bash

echo Discovery Service: BUILDING
cd discovery-service
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILDING
cd api-gateway
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILD DONE
echo User Service: BUILDING
cd user-service
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILD DONE
echo User Service: BUILD DONE
echo Vehicle Service: BUILDING
cd vehicle-service
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILD DONE
echo User Service: BUILD DONE
echo Vehicle Service: BUILD DONE
echo Zone Service: BUILDING
cd zone-service
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILD DONE
echo User Service: BUILD DONE
echo Vehicle Service: BUILD DONE
echo Zone Service: BUILD DONE
echo Booking Service: BUILDING
cd booking-service
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILD DONE
echo User Service: BUILD DONE
echo Vehicle Service: BUILD DONE
echo Zone Service: BUILD DONE
echo Booking Service: BUILD DONE
echo Campaign Service: BUILDING
cd campaign-service
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILD DONE
echo User Service: BUILD DONE
echo Vehicle Service: BUILD DONE
echo Zone Service: BUILD DONE
echo Booking Service: BUILD DONE
echo Campaign Service: BUILD DONE
echo Help Service: BUILDING
cd help-service
mvn clean install -U
cd ..
clear

echo Discovery Service: BUILD DONE
echo API Gateway: BUILD DONE
echo User Service: BUILD DONE
echo Vehicle Service: BUILD DONE
echo Zone Service: BUILD DONE
echo Booking Service: BUILD DONE
echo Campaign Service: BUILD DONE
echo Help Service: BUILDING DONE
echo ---
echo Starting Application...
docker-compose up --build
