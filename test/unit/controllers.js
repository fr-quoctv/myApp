'use strict';

describe('templateControllers module', function () {

  beforeEach(module('templateControllers'));

  describe('home controller', function () {
    it('should ...', inject(function ($controller) {
      var homeController = $controller('HomeController');
      expect(homeController).toBeDefined();
    }));
  });

  describe('about controller', function () {
    it('should ...', inject(function ($controller) {
      var aboutController = $controller('AboutController');
      expect(aboutController).toBeDefined();
    }));
  });
});
