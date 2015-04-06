(function () {
  'use strict';

  // define controller
  var controllerId = "learningGroupDetail";
  angular.module('app').controller(controllerId,
    ['$window', '$location', '$routeParams', 'common', 'datacontext', learningGroupDetail]);

  // create controller
  function learningGroupDetail($window, $location, $routeParams, common, datacontext) {
    var vm = this;
    // utility method to convert universal time > local time using moment.js
    vm.created = localizedCreatedTimestamp;
    vm.modified = localizedModifiedTimestap;
    // navigate backwards in the history stack
    vm.goBack = goBack;
    vm.goSave = goSave;
    vm.goDelete = goDelete;

    // init controller
    init();


    // init controller
    function init() {
      // if an ID is passed in, load the item
      var learningGroupId = +$routeParams.id;
      if (learningGroupId && learningGroupId > 0) {
        getItem(learningGroupId);
      } else {
          createItem();
        }

      common.logger.log("controller loaded", null, controllerId);
      common.activateController([], controllerId);
    }

    // localized created time for the current item
    function localizedCreatedTimestamp() {
      if (vm.learningGroup) {
        return moment(vm.learningGroup.Created).format("M/D/YYYY h:mm A");
      } else {
        return '';
      }
    }

        // localized modified time for the current item
    function localizedModifiedTimestap() {
      if (vm.learningGroup) {
        return moment(vm.learningGroup.Modified).format("M/D/YYYY h:mm A");
      } else {
        return '';
      }
    }

    // navigate backwards in the history stack
    function goBack() {
      $window.history.back();
    }

    // handle save action
    function goSave() {
      datacontext.saveLearningGroup(vm.learningGroup)
        .then(function () {
          common.logger.logSuccess("Saved learning group.", null, controllerId);
        })
        .then(function () {
          $location.path('/LearningGroups/');
        });
    }

    // handle delete action
    function goDelete() {
      datacontext.deleteLearningGroup(vm.learningGroup)
        .then(function () {
          common.logger.logSuccess("Deleted learning group.", null, controllerId);
        })
        .then(function () {
          $location.path('/LearningGroups/');
        });
    }

    // create a new learning path item
    function createItem() {
      vm.learningGroup = datacontext.createLearningGroup();
    }

    // load the item specified in the route
    function getItem(learningGroupId) {
      datacontext.getLearningGroup(learningGroupId)
        .then(function (data) {
          vm.learningGroup = data;
        });
    }
  }

})();