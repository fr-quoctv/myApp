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
    },
    save:{
      method:'POST'
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
 tempServices.factory('script', ['$resource', function ($resource) {
    return $resource('data/:requestParam.json', {}, {
    query: {
      method: 'GET',
      params: {
        requestParam: 'script'
      },
      isArray: true,  
    }
  });
}]);