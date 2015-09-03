(function () {

var eatMuch = angular.module('eatMuch', []);

eatMuch.controller('lunchTester', ['$scope', function($scope) {
  $scope.lunchMenu = '';
  $scope.ok = false;
  $scope.tooMuch = false;
  
  $scope.listAndTestMenu = function() {
    var dishes = $scope.lunchMenu.trim().split(',');
    if ($scope.lunchMenu.trim().length === 0) {
      dishes = [];
    }
    
    // Check how many dishes the person ate
    if (dishes.length === 0) {
      $scope.ok = false;
      $scope.tooMuch = false;
    }
    else if (dishes.length > 5) {
      $scope.ok = false;
      $scope.tooMuch = true;
    }
    else {
      $scope.ok = true;
      $scope.tooMuch = false;
    }
    
    return $scope.lunchMenu;
  };
  
}]);

})()


