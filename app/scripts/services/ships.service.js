angular.module('testApp')
    .service('shipsSvc', ['$http', '$q', function($http, $q) {
      var shipsArray = [];

      this.getShips = function() {
        var promise;

        if (shipsArray.length) {
          promise = $q.resolve(shipsArray);
        } else {
          promise = $http({
            method: 'GET',
            url: '/mockdata/ships.json'
          }).then(function(response) {
            shipsArray = response.data.ships;
            return shipsArray;
          }, function(response) {
            return [];
          });
        }

        return promise;
      };
      this.getShip = function(id) {
        return this.getShips().then(function(ships) {
          var ship = _.find(shipsArray, {id: id});

          return ship;
        });
      };
    }
]);
