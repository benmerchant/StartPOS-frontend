angular.module('app').controller('MainController', MainController);

MainController.$inject = ['$scope', '$routeParams', '$location'];

function MainController($scope, $routeParams, $location){
  console.log('MainController');
  // $scope.startSearch = function(){
  //   $location.path('/');
  // };
  $scope.pageClass = function(path){
    return (path == $location.path()) ? 'active' : '';
  };
}
