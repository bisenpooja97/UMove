// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   baseUrl: 'https://umove-dev.stackroute.io/',
  userService: 'userservice',
  
  userBaseApi: '/api/v1/users',
  //baseUrl1: 'http://localhost:8093',
  zoneService: 'zoneservice',
  zoneBaseApi: '/api/v1/zones',
  // baseUrl2: 'http://172.23.234.112:8093/',
  campaignService: 'campaignservice',
  campaignBaseApi: '/api/v1/campaigns',
  vehicleService: 'vehicleservice',
  vehicleBaseApi: '/api/v1/vehicles',
  typeBaseApi: '/api/v1/types',
  fuelBaseApi: '/api/v1/fuel',
  // baseUrl3: 'http://172.23.234.77:8094/',
  bookingService: 'bookingservice',
  configBaseApi: '/api/v1/config',
  reportService: 'reportservice',
  reportBaseApi: '/api/v1/reports/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
