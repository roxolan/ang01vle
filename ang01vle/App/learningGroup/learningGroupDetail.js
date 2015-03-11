(function () {
    'use strict';

    // define controller
    var controllerId = "learningGroupDetail";
    angular.module('app').controller(controllerId,
      ['$window', '$location', '$routeParams', 'common', learningGroupDetail]);

    // create controller
    function learningGroupDetail($window, $location, $routeParams, common) {
        var vm = this;
        // utility method to convert universal time > local time using moment.js
        vm.created = localizedCreatedTimestamp;
        vm.modified = localizedModifiedTimestap;
        // navigate backwards in the history stack
        vm.goBack = goBack;

        // init controller
        init();


        // init controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);

            getItemDetail();
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

        // load the item specified in the route
        function getItemDetail() {
            var val = $routeParams.id;
            return val === 'new'
              ? (vm.learningGroup = dummyLearningGroup)   // if new item
              : (vm.learningGroup = dummyLearningGroup);  // else existing so load specified
        }

    }

    var dummyLearningGroup = {
        "__metadata": {
            "id": "bafea3dc-80b0-49e4-9f58-324993c5d5e0",
            "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)",
            "etag": "\"2\"",
            "type": "SP.Data.LearningGroupListItem"
        },
        "FirstUniqueAncestorSecurableObject": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/FirstUniqueAncestorSecurableObject"
            }
        },
        "RoleAssignments": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/RoleAssignments"
            }
        },
        "AttachmentFiles": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/AttachmentFiles"
            }
        },
        "ContentType": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/ContentType"
            }
        },
        "FieldValuesAsHtml": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/FieldValuesAsHtml"
            }
        },
        "FieldValuesAsText": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/FieldValuesAsText"
            }
        },
        "FieldValuesForEdit": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/FieldValuesForEdit"
            }
        },
        "File": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/File"
            }
        },
        "Folder": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/Folder"
            }
        },
        "ParentList": {
            "__deferred": {
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)/ParentList"
            }
        },
        "FileSystemObjectType": 0,
        "Id": 1,
        "ID": 1,
        "ContentTypeId": "0x01003AE59CE4F2514DE7905C9D51DEBC509300F7AD9E1C26FE304C8C17952F384D6E55",
        "Title": "Learning Single Page Apps",
        "Modified": "2014-01-31T21:35:51Z",
        "Created": "2014-01-31T21:29:37Z",
        "AuthorId": 1,
        "EditorId": 1,
        "OData__UIVersionString": "1.0",
        "Attachments": false,
        "GUID": "7a145a78-964d-45c6-b079-63806a5ca45c",
        "OData__Comments": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };

})();