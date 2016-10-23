'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # ShipCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ShipsCtrl', ['shipsSvc', function(shipsSvc) {
    var self = this;

    shipsSvc.getShips().then(
        function(ships) {
          self.ships = ships;
        });
  }]);
