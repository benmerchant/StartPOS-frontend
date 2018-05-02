angular.module('app').controller('indexCtrl', ['$scope', '$routeParams', '$log',
  function($scope, $routeParams, $log){
    $log.log('indexCtrl');
    $scope.name = 'Ben';
  }
]);
