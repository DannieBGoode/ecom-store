angular.module('testApp')
  .controller('ShipCtrl', ['$routeParams', 'shipsSvc', function ($routeParams, shipsSvc) {

    // this.ship = shipsSvc.getShip($routeParams.id);
    var self = this;
    shipsSvc.getShip($routeParams.id).then(function(selectedShip){
        self.ship = selectedShip;
    });
    // this.ship = ship;

  }]);
