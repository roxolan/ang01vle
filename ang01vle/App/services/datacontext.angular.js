(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId,
        ['$rootScope', '$http', '$q', 'config', 'common', 'spContext', datacontext]);

    function datacontext($rootScope, $http, $q, config, common, spContext) {

        init()

        // service public signature
        return {
            // learning group members:
            getLearningGroupsPartials: getLearningGroupsPartials

        }

        function init() {
            common.logger.log("service loaded", null, serviceId);
        }

        function getLearningGroupsPartials() {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '_api/web/lists/getbytitle(\'Навчальні групи\')/items?$select=Id,Title,OData__Comments&$orderby=Title',
            })
            .success(function (data) {
                common.logger.log('retrieved LGroup partials via ngHttp', data, serviceId);
                deferred.resolve(data.d.results);
            })
            .error(function (error) {
                var message = 'data context ngHttp error: ' + error.message;
                common.logger.logError(message, error, serviceId);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }

})();