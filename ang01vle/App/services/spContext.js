(function () {
    'use strict';

    // define service
    var serviceId = 'spContext';
    var loggerSource = '[' + serviceId + '] ';
    angular.module('app').service(serviceId, [
      '$log', '$cookieStore', '$window', '$location', spContext]);

    function spContext($log, $cookieStore, $window, $location) {
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
    }
})();