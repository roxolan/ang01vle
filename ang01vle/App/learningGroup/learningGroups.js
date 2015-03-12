(function () {
    'use strict';

    // define controller
    var controllerId = "learningGroups";
    angular.module('app').controller(controllerId,
      ['$location', 'common', learningGroups]);

    // create controller
    function learningGroups($location, common) {
        var vm = this;
        var logger = common.logger;

        // collection of items
        vm.learningGroups = dummyLearningGroups;

        // navigate to specified item
        vm.goToItem = goToItem;

        // init controller
        init();

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
    };

    // sample data
    var dummyLearningGroups = [
        {
            "__metadata": {
                "id": "bafea3dc-80b0-49e4-9f58-324993c5d5e0",
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(1)",
                "etag": "\"2\"",
                "type": "SP.Data.LearningGroupsListItem"
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
        },
        {
            "__metadata": {
                "id": "24372929-4f9c-4f5d-9362-ce9d99434b88",
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)",
                "etag": "\"2\"",
                "type": "SP.Data.LearningGroupListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/FirstUniqueAncestorSecurableObject"
                }
            },
            "RoleAssignments": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/RoleAssignments"
                }
            },
            "AttachmentFiles": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/AttachmentFiles"
                }
            },
            "ContentType": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/ContentType"
                }
            },
            "FieldValuesAsHtml": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/FieldValuesAsHtml"
                }
            },
            "FieldValuesAsText": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/FieldValuesAsText"
                }
            },
            "FieldValuesForEdit": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/FieldValuesForEdit"
                }
            },
            "File": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/File"
                }
            },
            "Folder": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/Folder"
                }
            },
            "ParentList": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(2)/ParentList"
                }
            },
            "FileSystemObjectType": 0,
            "Id": 2,
            "ID": 2,
            "ContentTypeId": "0x01003AE59CE4F2514DE7905C9D51DEBC509300F7AD9E1C26FE304C8C17952F384D6E55",
            "Title": "Learning SharePoint 2013 REST",
            "Modified": "2014-01-31T21:35:56Z",
            "Created": "2014-01-31T21:35:10Z",
            "AuthorId": 1,
            "EditorId": 1,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "41c2816a-ed83-4c59-9305-062818e82c08",
            "OData__Comments": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "__metadata": {
                "id": "210842f7-74e2-4200-bdde-7d2226d2dcef",
                "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)",
                "etag": "\"1\"",
                "type": "SP.Data.LearningGroupListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/FirstUniqueAncestorSecurableObject"
                }
            },
            "RoleAssignments": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/RoleAssignments"
                }
            },
            "AttachmentFiles": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/AttachmentFiles"
                }
            },
            "ContentType": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/ContentType"
                }
            },
            "FieldValuesAsHtml": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/FieldValuesAsHtml"
                }
            },
            "FieldValuesAsText": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/FieldValuesAsText"
                }
            },
            "FieldValuesForEdit": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/FieldValuesForEdit"
                }
            },
            "File": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/File"
                }
            },
            "Folder": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/Folder"
                }
            },
            "ParentList": {
                "__deferred": {
                    "uri": "http://foo.local/LearningPathManager/_api/Web/Lists(guid'0d9faf94-247d-4ab9-8ec3-83ad7b978248')/Items(3)/ParentList"
                }
            },
            "FileSystemObjectType": 0,
            "Id": 3,
            "ID": 3,
            "ContentTypeId": "0x01003AE59CE4F2514DE7905C9D51DEBC509300F7AD9E1C26FE304C8C17952F384D6E55",
            "Title": "Learning SharePoint 2013 Apps",
            "Modified": "2014-01-31T21:35:46Z",
            "Created": "2014-01-31T21:35:46Z",
            "AuthorId": 1,
            "EditorId": 1,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "72aa0ca7-fff8-4d69-a1e8-91d3c3a97751",
            "OData__Comments": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];
})();