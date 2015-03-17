(function () {
    'use strict';

    // define controller
    var controllerId = "learningGroups";
    angular.module('app').controller(controllerId,
      ['$location', 'common', 'datacontext', learningGroups]);

    // create controller
    function learningGroups($location, common, datacontext) {
        var vm = this;
        var logger = common.logger;


        // navigate to specified item
        vm.goToItem = goToItem;

        // init controller
        init();

        getLearningGroups();

        // init controller
        function init() {
            logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);
        }

        // navigate to specified item
        function goToItem(learningGroup) {
            if (learningGroup && learningGroup.Id) {
                $location.path('/LearningGroups/' + learningGroup.Id);
            }
        }

        function getLearningGroups() {
            datacontext.getLearningGroupsPartials()
                .then(function (data) {
                    if (data) {
                        vm.learningGroups = data;
                    } else {
                        throw new Error('error obtaining data');
                    }
                })
                .catch(function (error) {
                    common.logger.logError('error obtaining learning groups', error, controllerId);
                });
        }
    };

})();