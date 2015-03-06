(function () {
    'use strict';

    var app = angular.module('app');

    // get all the routes
    app.constant('routes', getRoutes());

    // config routes & their resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {
        // for each route, specify what should happen
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });

        // when it does not get the matching route, redirect to a URL that is known to work
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // build the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'App/dashboard/dashboard.html',
                    title: 'starting page',
                    settings: {
                        nav: 0,
                        content: 'starting page',
                        quickLaunchEnabled: false
                    }
                }
            },
            {
                url: '/LearningGroups',
                config: {
                    templateUrl: 'App/learningGroup/learningGroups.html',
                    title: 'learning groups',
                    settings: {
                        nav: 1,
                        content: 'learning groups',
                        quickLaunchEnabled: true
                    }
                }
            },
            {
                url: '/LearningGroups/:id',
                config: {
                    templateUrl: 'App/learningGroup/learningGroupDetail.html',
                    title: 'learning group',
                    settings: {
                        nav: 1.1,
                        content: 'learning group - details',
                        quickLaunchEnabled: false
                    }
                }
            },
            {
                url: '/Courses',
                config: {
                    templateUrl: 'App/Course/courses.html',
                    title: 'курси',
                    settings: {
                        nav: 2,
                        content: 'courses',
                        quickLaunchEnabled: true
                    }
                }
            },
            {
                url: '/Courses/:id',
                config: {
                    templateUrl: 'App/Course/courseDetail.html',
                    title: 'course',
                    settings: {
                        nav: 2.1,
                        content: 'course - details',
                        quickLaunchEnabled: false
                    }
                }
            }
        ];
    }
})();