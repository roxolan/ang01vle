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
      deleteLearningGroup: deleteLearningGroup,

      // course members
      getCoursePartials: getCoursePartials,
      getCourse: getCourse,
      createCourse: createCourse,
      deleteCourse: deleteCourse,

      // shared
      saveChanges: saveChanges,
      revertChanges: revertChanges
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
      // first try to get the data from the local cache, but if not present, grab from server
      return manager.fetchEntityByKey('LearningGroup', id, true)
      .then(function (data) {
        common.logger.log('fetched learning group from ' + (data.fromCache ? 'cache' : 'server'), data);
        return data.entity;
      });
    }

    // creates a new learning group
    function createLearningGroup() {
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

    function deleteCourse(course) {
    }

    // saves all changes
    function saveChanges() {
      // save changes
      return manager.saveChanges()
        .then(function (result) {
          if (result.entities.length == 0) {
            common.logger.logWarning('Nothing saved.');
          } else {
            common.logger.logSuccess('Saved changes.');
          }
        })
        .catch(function (error) {
          $q.reject(error);
          common.logger.logError('Error saving changes', error, serviceId);
        });
    }

    // reverts all changes back to their original state
    function revertChanges() {
      return manager.rejectChanges();
    }

  }
})();