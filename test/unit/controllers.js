'use strict';

describe('templateApp controllers', function () {
  beforeEach(module('templateApp'));

  describe('HomeController', function () {
    var controller, scope, route;

    beforeEach(inject(function ($rootScope, $route, $controller) {
      scope = $rootScope.$new();
      route = $route;
      controller = $controller('HomeController', {
        $scope: scope
      });
    }));

    it('should ...', function () {
      expect(controller).toBeDefined();
      expect(scope.template).toBe(route.routes['/home'].templateUrl);
    })

    // it('should create template model which equals to templateUrl', function () {
    //   expect(scope.template).toBe('view/home.html');
    // });
  });

  describe('AboutController', function () {
    var controller, scope, route;

    beforeEach(inject(function ($rootScope, $route, $controller) {
      scope = $rootScope.$new();
      route = $route;
      controller = $controller('AboutController', {
        $scope: scope
      });
    }));

    it('should ...', function () {
      expect(controller).toBeDefined();
      expect(scope.template).toBe(route.routes['/about'].templateUrl);
    })

    // it('should create template model which equals to templateUrl', function () {
    //   expect(scope.template).toBe('view/about.html');
    // });
  });
});
