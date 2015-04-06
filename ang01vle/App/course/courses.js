(function () {
  'use strict';

  // define controller
  var controllerId = "courses";
  angular.module('app').controller(controllerId,
    ['$location', '$routeParams', 'common', 'datacontext', courses]);

  // create controller
  function courses($location, $routeParams, common, datacontext) {
    var vm = this;

    // navigate to the specified item
    vm.goToCourse = goToCourse;
    // build link to create new courses
    vm.newCourseUrl = newCourseUrl;


    // init controller
    init();

    // load all courses
    getCourses();

    // init controller
    function init() {
      common.logger.log("controller loaded", null, controllerId);
      common.activateController([], controllerId);
    }

    function newCourseUrl() {
      var learningGroupId = +$routeParams.learningGroupId || 0;

      if (learningGroupId && learningGroupId > 0) {
        return '#/LearningGroups/' + learningGroupId + '/Courses/new';
      } else {
        return '#/Courses/new';
      }
    }

    // navigate to the specified item
    function goToCourse(course) {
      if (course && course.Id) {
          $location.path('/Courses/' + course.Id);
      }
    }

    // gets all courses as partials (filtered if specified)
    function getCourses() {
      /*  get the learning group to filter on
          if not specified, this comes back as NaN which is dealt with in the datacontext   */
      var learningGroupId = +$routeParams.learningGroupId;

      datacontext.getCoursePartials(learningGroupId)
        .then(function (data) {
          if (data) {
            vm.courses = data;
          } else {
            throw new Error('error obtaining data');
          }
        }).catch(function (error) {
          common.logger.logError('error obtaining courses', error, controllerId);
        });
    }        
  };

})();