angular.module('testApp')
  .controller('ShipCtrl', ['$routeParams', 'shipsSvc', function($routeParams, shipsSvc) {
    var self = this,
      shipRows = [],
      i = 0,
      row = {};

    shipsSvc.getShip($routeParams.id).then(function(selectedShip) {
      self.ship = selectedShip;
      for (i = 0; (i < self.ship.details.length) || (i < self.ship.specification.length); i++) {
        row = {};
        if (self.ship.details[i]) {
          row.details = self.ship.details[i];
        }
        if (self.ship.specification[i]) {
          row.specification = self.ship.specification[i];
        }
        shipRows.push(row);
      }
      self.ship.shipRows = shipRows;
    });
  }]);
