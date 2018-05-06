angular.module('app').controller('employeeCtrl', EmployeeController);

EmployeeController.$inject = ['$scope', 'getEmpsService', '$http'];

function EmployeeController($scope, getEmpsService, $http){
  console.log('employeeCtrl');
  var vm = this;

  // this.employees = [{first_name:'34'},{first_name:'sdfsdf'}];

  getEmpsService.getEmployees(function(results){
    console.log(results.employees);
    vm.employees = results.employees;

  });


};
