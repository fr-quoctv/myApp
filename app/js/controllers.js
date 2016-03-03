'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('HomeController', ['$scope', '$route',
  function ($scope, $route) {
    // Controller method for Home
    $scope.template = $route.current.templateUrl;
}]);

templateControllers.controller('AboutController', ['$scope', '$route',
  function ($scope, $route) {
    // Controller method for About
    $scope.template = $route.current.templateUrl;
}]);
