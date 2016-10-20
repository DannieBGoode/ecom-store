'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main',
      //   activetab: 'home'
      // })
      .when('/ships', {
        templateUrl: 'views/ships.html',
        controller: 'ShipsCtrl',
        controllerAs: 'ships',
        activetab: 'ships'
      })
      .when('/ships/:id', {
        templateUrl: 'views/information.html',
        controller: 'ShipCtrl',
        controllerAs: 'information',
        activetab: 'information'
      })
      .when('/customization/:id', {
        templateUrl: 'views/customization.html',
        controller: 'customizationCtrl',
        controllerAs: 'customization'
      })
      .otherwise({
        redirectTo: '/ships'
      });
  });
