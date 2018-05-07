angular.module('app').controller('addEmpCtrl', AddEmployeeController);

AddEmployeeController.$inject = ['addEmpService'];

function AddEmployeeController(addEmpService){
  console.log('addEmpCtrl');
  var vm = this;
  vm.newEmp = {};
  vm.addSuccess = false;

  vm.addEmployee = function(){
    var postData = {
      email: vm.newEmp.email,
      first_name: vm.newEmp.first_name,
      last_name: vm.newEmp.last_name,
      ssn: vm.newEmp.ssn,
      birth_date: vm.newEmp.birth_date,
      gender: vm.newEmp.gender
    };
    addEmpService.addEmp(postData, function(){
      // clear scope for form
      vm.newEmp = null;
      vm.addSuccess = true;
      

    });
  };
};
