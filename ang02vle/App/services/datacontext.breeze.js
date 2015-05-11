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
      getCourses: getCourses,
      getCoursesForLearningGroup: getCoursesForLearningGroup,
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
      learningGroupType = metadataStore.getEntityType('LearningGroups');

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
      return manager.fetchEntityByKey('LearningGroups', id, true)
      .then(function (data) {
        common.logger.log('fetched learning group from ' + (data.fromCache ? 'cache' : 'server'), data);
        return data.entity;
      });
    }

    // creates a new learning group
    function createLearningGroup(initialValues) {
      return manager.createEntity(learningGroupType, initialValues);
    }

    function deleteLearningGroup(learningGroup) {
      // could possibly have this also delete the children items related to this
      //  but you need to consider what happens with the local cache... if 
      //  sharepoint automatically deletes the children, your biz logic should handle it
      learningGroup.entityAspect.setDeleted();
      return saveChanges();
    }

    // retrieve all learning groups, using ngHttp service
    function getCourses() {
      return breeze.EntityQuery
      .from(courseType.defaultResourceName)
      .using(manager)
      .execute()
      .then(function(data){
        return data.results;
      })
    }

    // retrieve courses for a specific learning group
    function getCoursesForLearningGroup(learningGroupId) {
      // get learning group (hopefully from cache)...
      return getLearningGroup(learningGroupId)
        .then(function () {
          // query that always works
          console.log("MON courseType.custom: " + courseType.custom);
          var query = breeze.EntityQuery
             .from(courseType.defaultResourceName)
              // query that works in Office365 / SPO and versions of SharePoint 2013
              // that have XXX 201X applied (this CU includes a bugfix)
              .where('LearningGroupId', 'eq', learningGroupId);
              /* In case it did not work aconnell has a hack (described in #5.12): */
              // .where('LearningGroup.Id', 'eq', learningGroupId)
              // .select(courseType.custom.defaultSelect + ',LearningGroup.Id')
              // .expand('LearningGroup');
          return manager.executeQuery(query)
            .then(function (data) {
              return data.results;
            });
        });
    }

    // gets a specific course
    function getCourse(id) {
      // first try to get the data from the local cache, but if not present, grab from server
      return manager.fetchEntityByKey('Course', id, true)
        .then(function (data) {
          common.logger.log('fetched course from ' + (data.fromCache ? 'cache' : 'server'), data);
          return data.entity;
        });
    }

    function createCourse() {
    }

    function deleteCourse(course) {
    }

    // saves all changes
    function saveChanges() {
      // save changes
      return manager.saveChanges()
        .then(function(result) {
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
    // (basically telling breeze to ignore changes that we just did
    function revertChanges() {
      return manager.rejectChanges();
    }

  }
})();