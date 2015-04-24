(function () {
  'use strict';

  // define factory
  var serviceId = 'datacontext';
  angular.module('app').factory(serviceId,
    ['$q', 'common', 'breeze.config', 'breeze.entities', datacontext]);

  function datacontext($q, common, breezeConfig, breezeEntities) {
    var metadataStore, courseType, learningGroupType;
    var manager;

    init()

    // service public signature
    return {
      // learning group members:
      getLearningGroups: getLearningGroups,
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
      // get reference to the breeze metadata store
      metadataStore = breezeEntities.metadataStore;

      // get references to the entity types
      courseType = metadataStore.getEntityType('Course');
      learningGroupType = metadataStore.getEntityType('LearningGroup');

      // define instance of the entity manager, used to issue all queries
      manager = new breeze.EntityManager({
        dataService: breezeConfig.dataservice,
        metadataStore: metadataStore
      });

      common.logger.log("service loaded", null, serviceId);
    }

    // retrieve all learning groups
    function getLearningGroups() {
      return breeze.EntityQuery
      .from(learningGroupType.defaultResourceName)
      .using(manager)
      .execute()
      .then(function (data) {
        return data.results;
      });
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