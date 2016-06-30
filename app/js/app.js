'use strict';

// Declare our `templateApp` and its depends.
var templateApp = angular.module('templateApp', [
  'ngRoute',
  'ngResource',
  'templateControllers',
  'tempServices'
]);

templateApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/html', {
      templateUrl: 'view/html.html',
      controller: 'htmlController'
    })
    .when('/css', {
      templateUrl: 'view/css.html',
      controller: 'cssController'
    })
    .when('/script', {
      templateUrl: 'view/script.html',
      controller: 'ScriptController'
    })
    .when('/home', {
      templateUrl: 'view/home.html',
      controller: 'HomeController'
    })
    .when('/login', {
      templateUrl: 'view/login.html',
      controller: 'LoginController'
    })
      .when('/profile', {
      templateUrl: 'view/profile.html',
      controller: 'ProfileController'
    })
         .when('/profile1', {
      templateUrl: 'view/profile1.html',
      controller: 'ProfileController1'
    })
    .otherwise({redirectTo: '/home'});
}]);
