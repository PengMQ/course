'use strict'
var courseApp = angular.module('courseApp', []);
courseApp.controller('CoursesCtrl', function($scope){
   $scope.courses = [
     {'name':'C Language'},
     {'name':'Analysis of Unix System'},
     {'name':'Structure and Interpretation of Computer Programs'}
    ];
 });
