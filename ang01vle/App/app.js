(function () {
    'use strict';

    // create the app
    var app = angular.module('app', [
      // ootb angular modules
      'ngRoute',      // app route (url path) support
      'ngSanitize'  // fixes HTML issues in data binding
      //'ngCookies',   // cookie read/write support
      // my custom modules
      //'common'
    ]);

    // wire up routing for errors & success events
    //app.run(['$route', function ($route) {
        // run any code that needs to execute prior to the app actually starting up
    //}]);
})();