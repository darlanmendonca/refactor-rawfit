/* globals beforeEach, expect, describe, it, xit */
'use strict';

let module = angular.mock.module;
let inject = angular.mock.inject;

describe('HomeController', function() {
  let $controller;

  beforeEach(angular.mock.module('rawfit'));
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('test $scope properties', function() {
    xit('viewName should be "Home"', function() {
      let HomeController = $controller('HomeController');
      expect(HomeController.viewName).to.be.equal('Home');
    });
  });
});
