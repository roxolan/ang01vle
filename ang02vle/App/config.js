(function () {
    'use strict';

            var app = angular.module('app');

    // all events that could be monitored in app
    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        // event when to toggle the working on it dialog
        workingOnItToggle: 'workingonit.toggle'
    };

    // app configuration object
    // that contains static global constants (not global variables)
    var config = {
        title: 'kmbs VLE',
        // config the exceptionHandler decorator
        appErrorPrefix: '[SYSERR] ',
        // app events
        events: events,
        // app version
        version: '1.0.0.0',
        // debug notification settings
        showDebugNotiSetting: false
    };

    // create a global variable on app called 'config'
    app.value('config', config);

    // configure the angular logging service before startup
    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);

    // configure the common configuration
    app.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.workingOnItToggleEvent = config.events.workingOnItToggle;
    }]);
})();