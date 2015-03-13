(function () {
    'use strict';

    var serviceId = 'angular.config';

    angular.module('app').factory(serviceId,
        ['$http', 'common', configAngular]);

    function configAngular($http, common) {

        init();

        return {};

        function init() {
            // set common $http headers
            $http.defaults.headers.common.Accept = 'application/json;odata=verbose;';

            common.logger.log("service loaded", null, serviceId);
        }
    }

})();