(function () {
    'use strict';

    // create the app
    var app = angular.module('app', [
      // ootb angular modules
      'ngRoute',     // app route (url path) support
      'ngSanitize',  // fixes HTML issues in data binding
      'ngResource',   // assists with rest calls
      'ngCookies',   // cookie read/write support
      'ngAnimate',
      // custom modules
      'common'
    ]);

    // wire up routing for errors & success events
    app.run(['$route', 'angular.config', function ($route, angularConfig) {
        // run any code that needs to execute prior to the app actually starting up
    }]);
})();