'use strict';

/**
 * @ngdoc function
 * @name courseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the courseApp
 */
angular.module('courseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
