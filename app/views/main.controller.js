angular.module('app').controller('MainController', MainController);

MainController.$inject = ['$rootScope', '$scope', '$routeParams', '$location'];

function MainController($rootScope, $scope, $routeParams, $location){
  console.log('MainController');
  // $scope.startSearch = function(){
  //   $location.path('/');
  // };
  // i think the active class is changing regardless of this function???
  $scope.pageClass = function(path){
    return (path == $location.path()) ? 'active' : '';
  };




}
