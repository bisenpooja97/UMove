// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  map: 'pk.eyJ1IjoicHVuaXRzZXRpYSIsImEiOiJjazBjOTY0cGcwMDI0M2RtbThsbWEyaXhnIn0.DrloATvnGeowNnIPanQT4g',
  baseUrl : 'http://13.235.35.202:8080/',
  zoneService : '/zoneservice/api/v1',
  vehicleService: '/vehicleservice/api/v1',
  tomTomUrl : 'https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=IND&streetName=',
  tomtomKey : '&key=Q0lrXtgq4yAgXdZuyf7RBbItuzVuRxUj',
  bookingSocket: '/ws',
  bookingService: 'bookingservice',
  bookingBaseApi: '/api/v1/rides',
  nearby : '/nearby',
  zones : '/zones'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
