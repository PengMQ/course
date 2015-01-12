'use strict';

/**
 * @ngdoc overview
 * @name courseApp
 * @description
 * # courseApp
 *
 * Main module of the application.
 */
var courseApp = angular.module('courseApp', ['ngRoute', 'courseControllers']);

courseApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/courses', {
      templateUrl: 'views/course-list.html',
      controller: 'CourseListCtrl'
    })
    .when('/courses/:courseId', {
      templateUrl: 'views/course-detail.html',
      controller: 'CourseDetailCtrl'
    })
    .otherwise({
      redirectTo: '/courses'
    });
}]);
