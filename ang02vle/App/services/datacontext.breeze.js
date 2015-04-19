(function () {
  'use strict';

  // define factory
  var serviceId = 'datacontext';
  angular.module('app').factory(serviceId,
    ['$q', 'common', datacontext]);

  function datacontext($q, common) {

    init()

    // service public signature
    return {
      // learning group members:
      getLearningGroupsPartials: getLearningGroupsPartials,
      getLearningGroup: getLearningGroup,
      createLearningGroup: createLearningGroup,
      saveLearningGroup: saveLearningGroup,
      deleteLearningGroup: deleteLearningGroup,
      // course members
      getCoursePartials: getCoursePartials,
      getCourse: getCourse,
      createCourse: createCourse,
      saveCourse: saveCourse,
      deleteCourse: deleteCourse
    }

    function init() {
      common.logger.log("service loaded", null, serviceId);
    }

    function getLearningGroupsPartials() {
    }

    // gets a specific learning group
    function getLearningGroup(id) {
    }

    // creates a new learning group
    function createLearningGroup() {
    }

    function saveLearningGroup(learningGroup) {
    }

    function deleteLearningGroup(learningGroup) {
    }

    // retrieve all learning paths, using ngHttp service
    function getCoursePartials(learningGroupIdFilter) {
    }

    // gets a specific course
    function getCourse(id) {
    }

    function createCourse() {
    }

    function saveCourse(course) {
    }

    function deleteCourse(course) {
    }
  }
})();