'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('htmlController',  ['$scope', 'html',
  function ($scope, html ) {
   $scope.html = html.query(function (data) {
       angular.forEach(data, function (value, key) {
            value.id = value.id;
       })
     })

  }

]);
templateControllers.controller('scriptController',  ['$scope', 'script',
  function ($scope, script,$location ) {
   $scope.script = script.query(function (data) {
       angular.forEach(data, function (value, key) {
            value.id = value.id;
       })
     })


  }
]);
templateControllers.controller('addController',  ['$scope', 'add',
  function ($scope, add ) {
   $scope.admin = admin.query(function (data) {
       angular.forEach(data, function (value, key) {
     
       })
     })  
    
  }]);
  
templateControllers.controller('ProfileController', ['$scope', '$route',
  function ($scope, $route) {
  
}]);
templateControllers.controller('loginController', ['$scope', '$route','$location',
  function ($scope, $route,$location) {

$scope.login =function(user,pass){
    if(user==='admin'&&pass==='123'){
      $location.path('/profile1');
    }
    else{
         var r = confirm(" try again!");
      if (r == true) {
        $location.path('/login');
       } else {
        $location.path('/home');;
       }
    }
  }
}]);
templateControllers.controller('Profile1Controller', ['$scope', '$route',
  function ($scope, $route) {

}]);
templateControllers.controller('HomeController', ['$scope', '$route', '$location',
  function ($scope, $route, $location) {
    $scope.template = $route.current.templateUrl;
    $scope.date = new Date();

}]);
templateControllers.controller('cssController', ['$scope', 'css',
  function ($scope, css ) {
   $scope.css = css.query(function (data) {
       angular.forEach(data, function (value, key) {
        value.id = value.id;
       
        $scope.count = 0;
    $scope.myFunction = function() {

        $scope.count++;
       if ($scope.myFunction=false) {
       
      };
    }
       $scope.showComment = false;
    $scope.comment = function() {
        $scope.showComment = !$scope.showComment; 
    }

       })
     })

  }
]);
templateControllers.controller('detailController', ['$scope', '$routeParams', 'css','$location',
  function ($scope, $routeParams, css,$location) {
    $scope.detail = css.get({
      requestParam: 'detail/' + $routeParams.code
    });
        $scope.next=function(count,id){
          console.log(count);
          console.log(id);
        var  str1=id.split(" ",2);
          console.log(str1[0]);
   for (var i = 1; i < 100; i++) {
     if(i==count){
      $location.path('/detail/'+str1[0]+" "+i);
     }
   }
   }

 }
  
]);


