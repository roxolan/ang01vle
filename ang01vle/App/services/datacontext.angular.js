(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId,
        ['$rootScope', '$http', '$resource', '$q', 'config', 'common', 'spContext', datacontext]);

    function datacontext($rootScope, $http, $resource, $q, config, common, spContext) {

        init()

        // service public signature
        return {
            // learning group members:
            getLearningGroupsPartials: getLearningGroupsPartials,
            getLearningGroup: getLearningGroup

        }

        function init() {
            common.logger.log("service loaded", null, serviceId);
            common.logger.log("the value of $ is: " + $q, null, serviceId);
        }

        // get the Learning Group angular resource reference
        function getLgResource(currentItem) {
            if (+currentItem.Id) {
                return $resource('_api/web/lists/getbytitle(\'Навчальні групи\')/items(:itemId)',
                { itemId: currentItem.Id },
                {
                    get: {
                        method: 'GET',
                        params: {
                            '$select': 'Id,Title,OData__Comments,Created,Modified'
                        },
                        headers: {
                            'Accept': 'application/json;odata=verbose;'
                        }
                    }
                });
            }
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

        // gets a specific learning group
        function getLearningGroup(id) {
            var lg = new vle.models.learningGroup();
            lg.Id = id;

            // get resource
            var resource = getLgResource(lg);
            common.logger.log("resource is undefined?", getLgResource(lg), serviceId);

            var deferred = $q.defer();
            resource.get({}, function (data) {
                // success callback
                deferred.resolve(data.d);
                common.logger.log("retrieved learning group", data, serviceId);
            }, function (error) {
                // failure callback
                deferred.reject(error);
                common.logger.logError("retrieve learning group", error, serviceId);
            });

            return deferred.promise;

        }
    }
})();