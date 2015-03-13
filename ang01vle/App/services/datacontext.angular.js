(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId,
        ['$rootScope', '$http', '$q', 'config', 'common', 'spContext', datacontext]);

    function datacontext($rootScope, $http, $q, config, common, spContext) {

        init()

        // service public signature
        return {}

        function init() {
            common.logger.log("service loaded", null, serviceId);
        }
    }

})();