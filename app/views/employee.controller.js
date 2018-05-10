angular.module('app').controller('employeeCtrl', EmployeeController);

EmployeeController.$inject = ['getEmpsService'];

function EmployeeController(getEmpsService){
  console.log('employeeCtrl');
  var vm = this;

  initController();

  function initController(){
    getEmpsService.getEmployees(function(results){
      vm.employees = results.employees;
    });
  };






};
