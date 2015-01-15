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
      var teacherId = $scope.course[0].teacherId;
      $http.get('jsondata/teacher-' + teacherId + '.json').then(function(response){
        $scope.teacherName = response.data[0].name;
      });
      $http.get('jsondata/students-' + $routeParams.courseId + '.json').then(function(response){
        $scope.students = response.data;
        console.log($scope.students);
      });
    });
  }]);

