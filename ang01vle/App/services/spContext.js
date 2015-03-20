(function () {
    'use strict';

    // define service
    var serviceId = 'spContext';
    var loggerSource = '[' + serviceId + '] ';
    angular.module('app').service(serviceId, [
      '$log', '$cookieStore', '$window', '$location', '$resource', '$timeout', 'common', spContext]);

    function spContext($log, $cookieStore, $window, $location, $resource, $timeout, common) {
        var service = this;
        var spWeb = {
            appWebUrl: '',
            title: '',
            logoUrl: ''
        };
        service.hostWeb = spWeb;

        // init the service
        init();

        // init... akin to class constructor
        function init() {
            $log.log(loggerSource, 'service loaded', null);

            // if values don't exist on querystring...
            if (decodeURIComponent(jQuery.getQueryStringValue("SPHostUrl")) === "undefined") {
                // load the app context form the cookie
                loadSpAppContext();

                // fire off auto refresh of digest
                refreshSecurityValidation();

            } else {
                // otherwise, create the app context & the cookie
                createSpAppContext();
            }
        }

        // create sharepoint app context by moving params on querystring to an app cookie
        function createSpAppContext() {
            $log.log(loggerSource, 'writing spContext cookie', null);

            var appWebUrl = decodeURIComponent(jQuery.getQueryStringValue('SPAppWebUrl'));
            $cookieStore.put('SPAppWebUrl', appWebUrl);

            var url = decodeURIComponent(jQuery.getQueryStringValue('SPHostUrl'));
            $cookieStore.put('SPHostUrl', url);

            var title = decodeURIComponent(jQuery.getQueryStringValue('SPHostTitle'));
            $cookieStore.put('SPHostTitle', title);

            var logoUrl = decodeURIComponent(jQuery.getQueryStringValue('SPHostLogoUrl'));
            $cookieStore.put('SPHostLogoUrl', logoUrl);


            $log.log(loggerSource, 'redirecting to app', null);
            $window.location.href = appWebUrl + '/app.html';
        }

        // init the sharepoint app context by loding the app's cookie contents
        function loadSpAppContext() {
            $log.log(loggerSource, 'loading spContext cookie', null);
            service.hostWeb.appWebUrl = $cookieStore.get('SPAppWebUrl');
            service.hostWeb.url = $cookieStore.get('SPHostUrl');
            service.hostWeb.title = $cookieStore.get('SPHostTitle');
            service.hostWeb.logoUrl = $cookieStore.get('SPHostLogoUrl');
        }

        function refreshSecurityValidation() {
            common.logger.log('refreshing security validation', service.securityValidation, serviceId);

            var siteContextInfoResource = $resource('_api/contextinfo', {}, {
                post: {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json;odata=verbose',
                        'Content-Type': 'application/json;odata=verbose'
                    }
                }
            });

            // request validation
            siteContextInfoResource.post({},
                // While it's still an HTTP POST, no data is submitted to SharePoint
                function (data) {
                    // success callback

                    // obtain security digest timeout & value & store in service
                    var validationRefreshTimeout = data.d.GetContextWebInformation.FormDigestTimeoutSeconds - 10;
                    service.securityValidation = data.d.GetContextWebInformation.FormDigestValue;
                    common.logger.log('refreshed security validation', service.securityValidation, serviceId);
                    common.logger.log('next refresh of security validation: ' + validationRefreshTimeout + " seconds", null, serviceId);

                    $timeout(function () {
                        refreshSecurityValidation();
                    }, validationRefreshTimeout * 1000);
                }, function(error) {
                    common.log.logError('response from contextinfo', error, serviceId);
                });
        }
    }
})();