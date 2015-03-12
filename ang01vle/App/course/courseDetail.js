(function () {
    'use strict';

    // define controller
    var controllerId = "courseDetail";
    angular.module('app').controller(controllerId,
      ['$window', '$location', '$routeParams', 'common', courseDetail]);

    // create controller
    function courseDetail($window, $location, $routeParams, common) {
        var vm = this;
        // utility method to convert universal time > local time using moment.js
        vm.created = localizedCreatedTimestamp;
        vm.modified = localizedModifiedTimestap;
        // navigate backwards in the history stack
        vm.goBack = goBack;

        // initalize controller
        init();


        // initalize controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);

            // load the item specified in the route
            getItemDetail();
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

        // load the item specified in the route
        function getItemDetail() {
            var val = $routeParams.id;
            return val === 'new'
              ? (vm.course = dummyCourse)  // if new item
              : (vm.course = dummyCourse); // else existing so load specified
        }

    }

    var dummyCourse = {
        /*
        "__metadata": {
            "id": "c89cc066-5554-4b2a-af57-83b8f03eb3d3",
            "uri": "http://foo.local/lpm/_api/Web/Lists(guid'576f5d5d-239c-4e9e-ada9-c040f4852dfb')/Items(1)",
            "etag": "\"1\"",
            "type": "SP.Data.LearningItemsListItem"
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
        "Title": "SharePoint 2013 - What you need to know",
        "ItemType": "Blog Post",
        "LearningPathId": 1,
        "Url": "http://www.andrewconnell.com/blog/SP2013-What-you-need-to-know",
        "OData__Comments": null,
        "ID": 1,
        "Modified": "2014-02-02T12:02:50Z",
        "Created": "2014-02-02T12:02:50Z",
        "AuthorId": 1073741823,
        "EditorId": 1073741823,
        "OData__UIVersionString": "1.0",
        "Attachments": false,
        "GUID": "c8e6ca37-bc3a-4c6c-ba21-5c2bec9825dd"
    */
    };

})();