angular.module('testApp')
  .controller('sideTabsCtrl', ['$location', function ($location, $scope) {
    console.log("loaded");
    // $scope.$watch($location.path(), function(){
    //   console.log($location.path());
    //   $scope.path = $location.path();
    // });
  }]);
