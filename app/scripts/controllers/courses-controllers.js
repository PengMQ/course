'use strict'
var courseControllers = angular.module('courseControllers', []);

courseControllers.controller('CourseListCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('jsondata/course.json').success(function(data){
    $scope.courses = data;
  });
}]);

courseControllers.controller('CourseDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.courseId = $routeParams.courseId;

}]);
