angular.module('app').controller('indexCtrl', IndexController);

IndexController.$inject = ['$scope', '$rootScope', '$log'];

function IndexController($scope, $rootScope, $log){
  $log.log('indexCtrl');
  $scope.name = 'Ben';
};
