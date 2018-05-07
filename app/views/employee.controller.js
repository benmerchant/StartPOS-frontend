angular.module('app').controller('employeeCtrl', EmployeeController);

EmployeeController.$inject = ['$scope', 'getEmpsService'];

function EmployeeController($scope, getEmpsService){
  console.log('employeeCtrl');
  var vm = this;

  getEmpsService.getEmployees(function(results){
    vm.employees = results.employees;
  });


};