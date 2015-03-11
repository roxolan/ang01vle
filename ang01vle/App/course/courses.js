(function () {
    'use strict';

    // define controller
    var controllerId = "courses";
    angular.module('app').controller(controllerId,
      ['$location', 'common', courses]);

    // create controller
    function courses($location, common) {
        var vm = this;

        // navigate to the specified item
        vm.goToCourse = goToCourse;
        vm.courses = dummyCourseList;

        // init controller
        init();

        // init controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);
        }

        // navigate to the specified item
        function goToCourse(course) {
            if (course && course.Id) {
                $location.path('/Courses/' + course.Id);
            }
        }
    };

    var dummyCourseList = [
        {
            "__metadata": {
                "id": "c89cc066-5554-4b2a-af57-83b8f03eb3d3",
                "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)",
                "etag": "\"1\"",
                "type": "SP.CoursesListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FirstUniqueAncestorSecurableObject"
                }
            },
            "RoleAssignments": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/RoleAssignments"
                }
            },
            "AttachmentFiles": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/AttachmentFiles"
                }
            },
            "ContentType": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/ContentType"
                }
            },
            "FieldValuesAsHtml": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FieldValuesAsHtml"
                }
            },
            "FieldValuesAsText": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FieldValuesAsText"
                }
            },
            "FieldValuesForEdit": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FieldValuesForEdit"
                }
            },
            "File": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/File"
                }
            },
            "Folder": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/Folder"
                }
            },
            "ParentList": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/ParentList"
                }
            },
            "FileSystemObjectType": 0,
            "Id": 1,
            "ContentTypeId": "0x010050E655E3C22D4916A106B11B7CE1712C004A385A20AF36E54B9E5A469E17D285D4",
            "Title": "Маркетинг",
            "LearningGroupId": 1,
            "DetailLink": {
                "__metadata": {
                    "type": "SP.FieldUrlValue"
                },
                "Description": "http://www.andrewconnell.com/blog/SP2013-What-you-need-to-know",
                "Url": "http://www.andrewconnell.com/blog/SP2013-What-you-need-to-know"
            },
            "OData__Description": null,
            "ID": 1,
            "Modified": "2014-02-02T12:02:50Z",
            "Created": "2014-02-02T12:02:50Z",
            "AuthorId": 1073741823,
            "EditorId": 1073741823,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "c8e6ca37-bc3a-4c6c-ba21-5c2bec9825dd"
        },
        {
            "__metadata": {
                "id": "c89cc066-5554-4b2a-af57-83b8f03eb3d3",
                "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)",
                "etag": "\"1\"",
                "type": "SP.CoursesListItem"
            },
            "FirstUniqueAncestorSecurableObject": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FirstUniqueAncestorSecurableObject"
                }
            },
            "RoleAssignments": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/RoleAssignments"
                }
            },
            "AttachmentFiles": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/AttachmentFiles"
                }
            },
            "ContentType": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/ContentType"
                }
            },
            "FieldValuesAsHtml": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FieldValuesAsHtml"
                }
            },
            "FieldValuesAsText": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FieldValuesAsText"
                }
            },
            "FieldValuesForEdit": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/FieldValuesForEdit"
                }
            },
            "File": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/File"
                }
            },
            "Folder": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/Folder"
                }
            },
            "ParentList": {
                "__deferred": {
                    "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)/ParentList"
                }
            },
            "FileSystemObjectType": 0,
            "Id": 1,
            "ContentTypeId": "0x010050E655E3C22D4916A106B11B7CE1712C004A385A20AF36E54B9E5A469E17D285D4",
            "Title": "Стратегічна ідея",
            "LearningGroupId": 2,
            "DetailLink": {
                "__metadata": {
                    "type": "SP.FieldUrlValue"
                },
                "Description": "http://www.andrewconnell.com/blog/SP2013-What-you-need-to-know",
                "Url": "http://www.andrewconnell.com/blog/SP2013-What-you-need-to-know"
            },
            "OData__Description": null,
            "ID": 1,
            "Modified": "2014-02-02T12:02:50Z",
            "Created": "2014-02-02T12:02:50Z",
            "AuthorId": 1073741823,
            "EditorId": 1073741823,
            "OData__UIVersionString": "1.0",
            "Attachments": false,
            "GUID": "c8e6ca37-bc3a-4c6c-ba21-5c2bec9825dd"
        }
    ];
})