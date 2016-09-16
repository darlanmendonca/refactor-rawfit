'use strict';

angular
  .module('rawfit')
  .config(routerConfig);

function routerConfig($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
