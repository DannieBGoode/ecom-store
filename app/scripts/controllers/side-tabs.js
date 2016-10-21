angular.module('testApp')
  .controller('sideTabsCtrl', ['$location', '$scope', function ($location, $scope) {
    console.log("loaded");
    $scope.view_tab = 'ships';
    $scope.changeTab = function(tab, allowed) {
      $scope.view_tab = tab;
      // alert(allowed);
    }
  }]);
