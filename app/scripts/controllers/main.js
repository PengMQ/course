'use strict';

/**
 * @ngdoc function
 * @name courseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the courseApp
 */
angular.module('courseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
