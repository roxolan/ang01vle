(function () {
  'use strict';

  // define controller
  var controllerId = "courseDetail";
  angular.module('app').controller(controllerId,
    ['$window', '$location', '$routeParams', 'common', 'datacontext', courseDetail]);

  // create controller
  function courseDetail($window, $location, $routeParams, common, datacontext) {
    var vm = this;

    // utility method to convert universal time > local time using moment.js
    vm.created = localizedCreatedTimestamp;
    vm.modified = localizedModifiedTimestap;
    // navigate backwards in the history stack
    vm.goBack = goBack;
    // handle saves & deletes
    vm.goSave = goSave;
    vm.goDelete = goDelete;

    init();


    function init() {
      // load the learning group selectors
      getLearningGroupsSelectors();

      // if an ID is passed in, load the item
      var courseId = +$routeParams.id;
      if (courseId && courseId > 0) {
        getCourse(courseId);
      } else {
        createCourse();
      }

      common.logger.log("controller loaded", null, controllerId);
      common.activateController([], controllerId);
    }

    // localized created time for the current item
    function localizedCreatedTimestamp() {
        if (vm.course) {
            return moment(vm.course.Created).format("M/D/YYYY h:mm A");
        } else {
            return '';
        }
    }

    // localized modified time for the current item
    function localizedModifiedTimestap() {
        if (vm.course) {
            return moment(vm.course.Modified).format("M/D/YYYY h:mm A");
        } else {
            return '';
        }
    }

    // navigate backwards
    function goBack() {
        $window.history.back();
    }

    // handle save action
    function goSave() {
      datacontext.saveCourse(vm.course)
        .then(function () {
          common.logger.logSuccess("Saved course", null, controllerId);
        })
        .then(function () {
          goBack();
        });
    }

    // handle delete action
    function goDelete() {
      datacontext.deleteCourse(vm.course)
        .then(function () {
          common.logger.logSuccess("Deleted course", null, controllerId);
        })
        .then(function () {
          goBack();
        });
    }

    // load all learning groups
    function getLearningGroupsSelectors() {
      datacontext.getLearningGroupsPartials()
        .then(function (data) {
          vm.learningGroups = data;
        });
    }

    // create a new course
    function createCourse() {
      vm.course = datacontext.createCourse();
    }

    // load the course specified in the route
    function getCourse(courseId) {
      datacontext.getCourse(courseId)
        .then(function (data) {
          vm.course = data;
        });
    }

  }
})();