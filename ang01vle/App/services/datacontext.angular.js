(function () {
  'use strict';

  var serviceId = 'datacontext';
  angular.module('app').factory(serviceId,
    ['$rootScope', '$http', '$resource', '$q', 'config', 'common', 'spContext', datacontext]);

  function datacontext($rootScope, $http, $resource, $q, config, common, spContext) {

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
      getCoursesPartials: getCoursesPartials
      /// 
    }

    function init() {
      common.logger.log("service loaded", null, serviceId);
    }

    // get the Learning Group angular resource reference
    function getLgResource(currentItem) {
      if (+currentItem.Id) {
        return $resource('_api/web/lists/getbytitle(\'Навчальні групи\')/items(:itemId)',
        { itemId: currentItem.Id },
        {
          get: {
            method: 'GET',
            params: {
              '$select': 'Id,Title,OData__Comments,Created,Modified'
            },
            headers: {
              'Accept': 'application/json;odata=verbose;'
            }
          },
          post: {
            method: 'POST',
            headers: {
              'Accept': 'application/json;odata=verbose;',
              'Content-Type': 'application/json;odata=verbose',
              'X-RequestDigest': spContext.securityValidation,
              'X-HTTP-Method': 'MERGE',
              'If-Match': currentItem.__metadata.etag
            }
          },
          delete: {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json;odata=verbose;',
              'Content-Type': 'application/json;odata=verbose;',
              'X-RequestDigest': spContext.securityValidation,
              'If-Match': '*'
            }
          }
        });
      } else {
        return $resource('_api/web/lists/getbytitle(\'Навчальні групи\')/items',
        {},
        {
          post: {
            method: 'POST',
            headers: {
              'Accept': 'application/json;odata=verbose;',
              'Content-Type': 'application/json;odata=verbose;',
              'X-RequestDigest': spContext.securityValidation
            }
          }
        });
      }
    }

    // get the Course angular resource reference
    function getCourseResource(currentCourse, learningGroupIdFilter) {
      // if a course is passed in...
      if (currentCourse) {
        // THEN if the course has an ID
        if (+currentCourse.Id) {
          // THEN get the specific course
          return $resource('_api/web/lists/getbytitle(\'Courses\')/items(:courseId)',
          { courseId: currentCourse.Id },
          {
            get: {
              method: 'GET',
              params: {
                '$select': 'Id,Title,LearningGroup/Id,DetailLink,Description,Created,Modified',
                '$expand': 'LearningGroup/Id'
              },
              headers: {
                'Accept': 'application/json;odata=verbose;'
              }
            },
            post: {
              method: 'POST',
              headers: {
                'Accept': 'application/json;odata=verbose;',
                'Content-Type': 'application/json;odata=verbose;',
                'X-RequestDigest': spContext.securityValidation,
                'X-HTTP-Method': 'MERGE',
                'If-Match': currentItem.__metadata.etag
              }
            },
            delete: {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json;odata=verbose;',
                'Content-Type': 'application/json;odata=verbose;',
                'X-RequestDigest': spContext.securityValidation,
                'If-Match': '*'
              }
            }
          });
        } else {
          // ELSE creating a course...
          return $resource('_api/web/lists/getbytitle(\'Courses\')/items',
            {},
            {
              post: {
                method: 'POST',
                headers: {
                  'Accept': 'application/json;odata=verbose;',
                  'Content-Type': 'application/json;odata=verbose;',
                  'X-RequestDigest': spContext.securityValidation
                }
              }
            });
        }
      } else {
        // ELSE if a learning group ID filter is passed in,
        if (learningGroupIdFilter) {
          // THEN build the resource filtering for a specific learning group
          // ELSE create resource showing all courses
          return $resource('_api/web/lists/getbytitle(\'Courses\')/items',
            {},
            {
              get: {
                method: 'GET',
                params: {
                  '$select': 'LearningGroup/Id,Id,Title,DetailLink,Description,Created,Modified',
                  '$expand': 'LearningGroup/Id',
                  '$filter': 'LearningGroup/Id eq ' + learningGroupIdFilter
                },
                headers: {
                  'Accept': 'application/json;odata=verbose;'
                }
              }
            });
        } else {
          return $resource('_api/web/lists/getbytitle(\'Courses\')/items',
          {},
          {
            get: {
              method: 'GET',
              headers: {
                'Accept': 'application/json;odata=verbose;'
              }
            }
          });
        }
      }
    }

    function getLearningGroupsPartials() {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: '_api/web/lists/getbytitle(\'Навчальні групи\')/items?$select=Id,Title,OData__Comments&$orderby=Title',
      })
      .success(function (data) {
        common.logger.log('retrieved LGroup partials via ngHttp', data, serviceId);
        deferred.resolve(data.d.results);
      })
      .error(function (error) {
        var message = 'data context ngHttp error: ' + error.message;
        common.logger.logError(message, error, serviceId);
        deferred.reject(error);
      });

      return deferred.promise;
    }

    // gets a specific learning group
    function getLearningGroup(id) {
      var lg = new vle.models.learningGroup();
      lg.Id = id;

      // get resource
      var resource = getLgResource(lg);

      var deferred = $q.defer();
      resource.get({}, function (data) {
        // success callback
        deferred.resolve(data.d);
        common.logger.log("retrieved learning group", data, serviceId);
      }, function (error) {
        // failure callback
        deferred.reject(error);
        common.logger.logError("retrieve learning group", error, serviceId);
      });

      return deferred.promise;
    }

    // creates a new learning group
    function createLearningGroup() {
      return new vle.models.learningGroup();
    }

    function saveLearningGroup(learningGroup) {
      // get resource
      var resource = getLgResource(learningGroup);

      var deferred = $q.defer();

      resource.post(learningGroup, function (data) {
        deferred.resolve(data);
        common.logger.log("save learning group", data, serviceId);
      }, function (error) {
        deferred.reject(error);
        common.logger.logError("save learning group", error, serviceId);
      });

      return deferred.promise;
    }

    function deleteLearningGroup(learningGroup) {
      // get resource
      var resource = getLgResource(learningGroup);

      var deferred = $q.defer();

      // use angular $resource to delete the item
      resource.delete(learningGroup, function (data) {
        deferred.resolve(data);
        common.logger.log("delete learning group", data, serviceId);
      }, function (error) {
        deferred.reject(error);
        common.logger.logError("delete learning group", error, serviceId);
      });

      return deferred.promise;
    }

    function getCoursesPartials(learningGroupIdFilter) {
      // get resource
      var resource = getCourseResource(null, learningGroupIdFilter);

      var deferred = $q.defer();
      resource.get({}, function (data) {
        deferred.resolve(data.d.results);
        common.logger.log("retrieved courses partials", data, serviceId);
      }, function (error) {
        deferred.reject(error);
        common.logger.logError("retrieved courses partials", error, serviceId);
      });

      return deferred.promise;
    }

  }
})();