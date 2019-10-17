// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://172.23.234.61:8080/',
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

