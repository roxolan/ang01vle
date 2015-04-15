(function () {
    'use strict';

    // create a common module
    var commonModule = angular.module('common', []);

    // create a common provider
    commonModule.provider('commonConfig', function () {
        this.config = {
            // see papa's course
            // this will expose the config object during the startup of app
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    // create the common service as a factory (using the factory recipy in Angular)
    commonModule.factory('common',
      ['$q', '$rootScope', '$timeout', 'commonConfig', 'logger', common]);

    function common($q, $rootScope, $timeout, commonConfig, logger) {
        var service = {
            // pass through common angular dependencies / services & expose direct map to them
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            // my services - also exposed
            logger: logger,
            activateController: activateController
        };

        return service;

        // broadcast mapper - to broadcast messages/events to the root scope
        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

        // create the activateController event/service
        // once all provided promices have completed, it will broadcast message to app that the event has completed 
        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerActivateSuccessfulEvent, data);
                // hide the workingOnIt animation
                $broadcast(commonConfig.config.workingOnItToggleEvent, { show: false });
            });
        }
    }
})();