// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  enableEdit: true,
  // serverURL: "ws://10.1.0.80:5008",
  // serverURL: (_) => "http://10.1.0.80:4000",
  serverURL: (_) => "https://live.diana-dettingen.de:40621",
  // serverURL: "ws://10.1.0.134:3008",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
