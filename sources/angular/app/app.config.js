'use strict';

angular
  .module('rawfit')
  .config(appConfig);

function appConfig($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
