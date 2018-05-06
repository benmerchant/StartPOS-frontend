angular.module('app').controller('oneEmployeeCtrl', EmployeeController);

EmployeeController.$inject = ['$scope', 'getEmpsService', '$routeParams'];

function EmployeeController($scope, getEmpsService, $routeParams){
  console.log('oneEmployeeCtrl');
  var vm = this;

  getEmpsService.getOneEmployee($routeParams.id, function(results){
    vm.employee = results;
  });

};
