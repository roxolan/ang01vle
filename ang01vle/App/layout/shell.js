(function () {
    'use strict';

    // define controller
    var controllerId = 'shell';
    angular.module('app').controller(controllerId,
      ['$rootScope', 'common', shell]);

    // create controller
    function shell($rootScope, common) {
        var vm = this;
        var logger = common.logger;

        // init controller
        init();

        // init controller
        function init() {
            logger.log("app shell loaded", null, controllerId);
            common.activateController([], controllerId);
        }
    }
})();