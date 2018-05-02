angular.module('app').controller('MainController', ['$scope', '$routeParams', '$location',
  function($scope, $routeParams, $location){
  console.log('MainController');
  $scope.startSearch = function(){
    $location.path('/');
  };
  $scope.pageClass = function(path){
    return (path == $location.path()) ? 'active' : '';
  };
}])
