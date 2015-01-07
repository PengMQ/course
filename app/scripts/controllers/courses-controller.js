'use strict'
var courseApp = angular.module('courseApp', []);
courseApp.controller('CoursesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('jsondata/course.json').success(function(data){
    console.log(data);
    $scope.courses = data;
  });
}]);
