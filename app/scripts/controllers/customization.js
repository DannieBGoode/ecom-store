angular.module('testApp')
  .controller('customizationCtrl', ['$routeParams', 'shipsSvc', function ($routeParams, shipsSvc) {
        var self = this;

        shipsSvc.getShip($routeParams.id).then(function(ship) {
          self.ship = ship;
          self.ship.passengersArray = _.range(1, self.ship.passengers + 1);
        });

        this.range = function(n){
          return new Array[n];
        }

        $("[name='my-checkbox']").bootstrapSwitch();
}]);
