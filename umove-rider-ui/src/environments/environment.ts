// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  map: 'pk.eyJ1IjoicHVuaXRzZXRpYSIsImEiOiJjazBjOTY0cGcwMDI0M2RtbThsbWEyaXhnIn0.DrloATvnGeowNnIPanQT4g',
  baseUrl : 'http://13.235.35.202:8080/',
  zoneService : 'zoneservice/api/v1',
  vehicleService: 'vehicleservice/api/v1',
  tomTomUrl : 'https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=IND&streetName=',
  tomtomKey : '&key=Q0lrXtgq4yAgXdZuyf7RBbItuzVuRxUj',
  bookingSocket: '/ws',
  bookingService: 'bookingservice',
  bookingBaseApi: '/api/v1/rides',
  nearby : '/nearby',
  zones : '/zones',
  vehicles: '/vehicles',
  userService: 'userservice',
  usersBaseApi: '/api/v1/users',
    campaignService: 'campaignservice',
    campaignBaseApi: '/api/v1/campaigns',
  firebase: {
    apiKey: 'AIzaSyC5Fc9iQzehhW9yw9qDDCUYhU7YhWPFgoI',
    authDomain: 'sms-project-3.firebaseapp.com',
    databaseURL: 'https://sms-project-3.firebaseio.com',
    projectId: 'sms-project-3',
    storageBucket: 'sms-project-3.appspot.com',
    messagingSenderId: '505919961682',
    appId: '1:505919961682:web:a1ad48542500c354403d8b'
  },
  configBaseApi: '/api/v1/config'
};
