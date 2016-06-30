'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('htmlController',  ['$scope', 'html',
  function ($scope, html ) {
    // .query;
    // So, we do query and get expected data back
    // $scope.abc = PersonService.query();

   // console.log($scope.username);

   $scope.html = html.query(function (data) {
       angular.forEach(data, function (value, key) {

       })
     })

  }
]);
templateControllers.controller('ProfileController', ['$scope', '$route',
  function ($scope, $route) {
  
}]);
templateControllers.controller('Profile1Controller', ['$scope', '$route',
  function ($scope, $route) {

}]);
templateControllers.controller('HomeController', ['$scope', '$route',
  function ($scope, $route) {
    // Controller method for Home
    $scope.template = $route.current.templateUrl;
    $scope.date = new Date();
  
}]);
templateControllers.controller('cssController', ['$scope', 'css',
  function ($scope, css ) {
    // .query;
    // So, we do query and get expected data back
    // $scope.abc = PersonService.query();

   // console.log($scope.username);

   $scope.css = css.query(function (data) {
       angular.forEach(data, function (value, key) {

       })
     })

  }
  //   function ($scope, PersonService) {
  //   // So, we do query and get expected data back
  //   $scope.people = PersonService.query(function (data) {
  //     angular.forEach(data, function (value, key) {
  //       if (!value.image) {
  //         value.image = 'http://placehold.it/200?text=' + value.fullName;
  //       }

  //       // We get :codeName from username of workEmail
  //       value.codeName = value.workEmail.split('@')[0];
  //     });
  //   });

  //   $scope.order = 'empCode';

  // }
]);

// templateControllers.controller('ScriptController', ['$scope', '$route',
//   function ($scope, $route) {
//     // Controller method for About
//     $scope.template = $route.current.templateUrl;
// }]);
// templateControllers.controller('LoginController',
//     ['$scope', 'AuthenticationService',
//     function ($scope, AuthenticationService) {
//         // reset login status
//         // AuthenticationService.ClearCredentials();
//         console.log($scope.username"d");
//         // $scope.login = function () {
//         //     $scope.dataLoading = true;
//         //     AuthenticationService.Login($scope.username, $scope.password, function(response) {
               
//         //     });
//         // };
//     }]);
// // , $rootScope, $location,