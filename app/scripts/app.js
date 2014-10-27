'use strict';

/**
 * @ngdoc overview
 * @name musketeerListApp
 * @description
 * # musketeerListApp
 *
 * Main module of the application.
 */
angular
  .module('musketeerListApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
