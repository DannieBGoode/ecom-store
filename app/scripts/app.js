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
    'ngTouch',
    'datePicker',
    'colorpicker'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/ships', {
        templateUrl: 'views/ships.html',
        controller: 'ShipsCtrl',
        controllerAs: 'ships',
        activeTab: 'ships'
      })
      .when('/ships/:id', {
        templateUrl: 'views/information.html',
        controller: 'ShipCtrl',
        controllerAs: 'information',
        activeTab: 'information'
      })
      .when('/customization/:id', {
        templateUrl: 'views/customization.html',
        controller: 'customizationCtrl',
        controllerAs: 'customization',
        activeTab: 'customization'
      })
      .otherwise({
        redirectTo: '/ships'
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.activeTab = toState.activeTab;
      $rootScope.lastShip = toState.params.id || '';
    });
  });
