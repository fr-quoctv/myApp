'use strict';
var tempServices = angular.module('tempServices', ['ngResource']);
 tempServices.factory('css', ['$resource', function ($resource) {
    return $resource('data/:requestParam.json', {}, {
    	
    query: {
      method: 'GET',
      params: {
        requestParam: 'css'
      },
      isArray: true,
    }
  });
}]);
 tempServices.factory('html', ['$resource', function ($resource) {
    return $resource('data/:requestParam.json', {}, {
    	
    query: {
      method: 'GET',
      params: {
        requestParam: 'html'
      },
      isArray: true,
    }
  });
}]);

//  tempServices.factory('AuthenticationService', ['$resource', function ($resource) {
//   //   return $resource('data/:requestParam.json', {}, {
    	
//   //   query: {
//   //     method: 'GET',
//   //     params: {
//   //       requestParam: 'test'
//   //     },
//   //     // isArray: true,
//   //   }
//   // });
// }]);
