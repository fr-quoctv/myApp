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
    .when('/script', {
      templateUrl: 'view/script.html',
      controller: 'scriptController'
    })
    .when('/css', {
      templateUrl: 'view/css.html',
      controller: 'cssController'
    })
    .when('/add', {
      templateUrl: 'view/add.html',
      controller: 'cssController'
    })
    .when('/home', {
      templateUrl: 'view/home.html',
      controller: 'HomeController'
    })
   
    .when('/login', {
      templateUrl: 'view/login.html',
      controller: 'loginController'
    })
      .when('/profile', {
      templateUrl: 'view/profile.html',
      controller: 'ProfileController'
    })
         .when('/profile1', {
      templateUrl: 'view/profile1.html',
      controller: 'ProfileController1'
    })
     .when('/detail/:code', {
      templateUrl: 'view/detail.html',
      controller: 'detailController'
    })
      .when('/detail/:id', {
      templateUrl: 'view/detail.html',
      controller: 'detailController'
    })
    .otherwise({redirectTo: '/home'});
}]);
