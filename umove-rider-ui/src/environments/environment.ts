// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  map: 'pk.eyJ1IjoicHVuaXRzZXRpYSIsImEiOiJjazBjOTY0cGcwMDI0M2RtbThsbWEyaXhnIn0.DrloATvnGeowNnIPanQT4g',
  baseUrl : 'http://192.168.1.9:8080/',
  zoneService : '/zoneservice/api/v1',
  vehicleService: '/vehicleservice/api/v1',
  tomTomUrl : 'https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=IND&streetName=',
  tomtomKey : '&key=Q0lrXtgq4yAgXdZuyf7RBbItuzVuRxUj',
  bookingSocket: '/ws',
  bookingService: 'bookingservice',
  bookingBaseApi: '/api/v1/rides',
  userService: 'userservice',
  usersBaseApi: '/api/v1/users',
  firebase: {
    apiKey: 'AIzaSyBZBoZCkX7W3dNNU6kQvSKfcMvZcerJSno',
    authDomain: 'smsproject-2.firebaseapp.com',
    databaseURL: 'https://smsproject-2.firebaseio.com',
    projectId: 'smsproject-2',
    storageBucket: '',
    messagingSenderId: '533980807336',
    appId: '1:533980807336:web:fbbbae25711ae4e252829d'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
