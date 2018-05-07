angular.module('app').controller('roleCtrl', RoleController);

RoleController.$inject = ['getRolesService', 'addRoleService', 'deleteRoleService'];

function RoleController(getRolesService, addRoleService, deleteRoleService){
  console.log('roleCtrl');
  var vm = this;

  initController();

  function initController(){
    // add new role form should be initially hidden
    vm.showForm = false;
    // success message initially not shown
    vm.addSuccess = false;
    vm.delSuccess = false;
    // initialize an default object
    vm.newRole = {salaried: true, manager_privileges: true};

    getRolesService.getRoles(function(results){
      vm.roles = results.roles;
      console.log(vm.roles);
    });
  };

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
      initController();
      vm.showForm = false; // hide the form
      vm.addSuccess = true; // show the success alert div
      vm.newRole = {salaried: true, manager_privileges: true}; // reset the model in case the form is shown again
    });
  };

  this.cancelAdd = function(){
    vm.showForm = false;
    vm.newRole = {salaried: true, manager_privileges: true}; // reset the model in case the form is shown again
  };

  this.deleteRole = function(roleID){

    console.log('delete role button ' + roleID);
    deleteRoleService.deleteRole(roleID, function(results){
      initController();
      vm.delSuccess = true;
    });
  };

  this.editRole = function(){
    console.log('edit role button');
  };

};
