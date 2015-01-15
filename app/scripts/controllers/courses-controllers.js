'use strict'

var courseControllers = angular.module('courseControllers', []);

courseControllers.controller('CourseListCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('jsondata/courses.json').success(function(data){
    $scope.courses = data;
  });
}]);

courseControllers.controller('CourseDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http){
    $http.get('jsondata/course-' + $routeParams.courseId + '.json').then(function(response){
      $scope.course = response.data;
    }).then(function(){
    });
  }]);

