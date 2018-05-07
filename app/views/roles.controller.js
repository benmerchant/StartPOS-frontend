angular.module('app').controller('roleCtrl', RoleController);

RoleController.$inject = ['getRolesService', 'addRoleService'];

function RoleController(getRolesService, addRoleService){
  console.log('roleCtrl');
  var vm = this;
  // add new role form should be initially hidden
  vm.showForm = false;
  // success message initially not shown
  vm.addSuccess = false;
  // initialize an default object
  vm.newRole = {salaried: true, manager_privileges: true};

  getRolesService.getRoles(function(results){
    vm.roles = results.roles;
    console.log(vm.roles);
  });

  this.showRoleForm = function(){
    vm.showForm = true;
  };

  this.sendNewRole = function(){
    var PostData = { // get data from the from
      name: vm.newRole.name,
      granular_pay: vm.newRole.granular_pay,
      salaried: vm.newRole.salaried,
      manager_privileges: vm.newRole.manager_privileges
    };

    addRoleService.addRole(PostData, function(){
      vm.showForm = false; // hide the form
      vm.addSuccess = true; // show the success alert div
      vm.newRole = {salaried: true, manager_privileges: true}; // reset the model in case the form is shown again
    });

  }

};
