angular.module('app').controller('oneEmployeeCtrl', EmployeesController);

EmployeesController.$inject = ['$scope', 'getEmpsService', '$routeParams', 'getRolesService','updateEmpService'];

function EmployeesController($scope, getEmpsService, $routeParams, getRolesService,updateEmpService){
  console.log('oneEmployeeCtrl');
  var vm = this;

  initController();

  function initController(){
    getEmpsService.getOneEmployee($routeParams.id, function(results){
      vm.employee = results;
      // section for adding roles
      vm.roleEditor = false;
    });
  };




  vm.addRole = function(){
    console.log('add role function');
    // only http request for roles if button is clicked
    getRolesService.getRoles(function(results){
      // get the roles from api
      vm.roles = results.roles;

      // show the assignRoleForm
      vm.roleEditor = true;
      // disable all the inputs initially
      vm.checkEnabled = false;
    });
  };

  vm.assignRole = function(event, empID){
    console.log('assign role form submit');

    var thisForm = event.currentTarget;
    var serializedFormData = $(thisForm).serialize();
    console.log(serializedFormData);

    var formArray = serializedFormData.split('&');
    console.log(formArray);
    // set up an array for the roles we will be PUTting
    var putRoleIDs = [];
    var putRoleNames = [];
    formArray.forEach(function(element){
      if(element.substring(0,4)==='role'){
        var tempArr = element.substring(5).split('=');



        var roleName = {_id: tempArr[0], name: tempArr[1].replace(/%20/g, " ")};

        putRoleNames.push(roleName);
      }
    });
    formArray.forEach(function(element){
      if(element.substring(0,3)==='pay'){
        var tempArr = element.substring(4).split('=');
        var tempName = tempArr[0];
        var rolePay = tempArr[1];
        putRoleNames.forEach(function(element){
          if(element['name']===tempName){
            element['rate_of_pay'] = rolePay;
          }
        });
      }
    });
    formArray.forEach(function(element){
      if(element.substring(0,3)==='sal'){
        var tempArr = element.substring(4).split('=');
        var tempName = tempArr[0];
        var roleSalBool = tempArr[1];
        putRoleNames.forEach(function(element){
          if(element['name']===tempName){
            element['salaried'] = roleSalBool;
          }
        });
      }
    });
    formArray.forEach(function(element){
      if(element.substring(0,3)==='man'){
        var tempArr = element.substring(4).split('=');
        var tempName = tempArr[0];
        var roleManBool = tempArr[1];
        putRoleNames.forEach(function(element){
          if(element['name']===tempName){
            element['manager_privileges'] = roleManBool;
          }
        });
      }
    });
    console.log(putRoleNames);
    var postData = {roles: putRoleNames};
    updateEmpService.updateEmp(empID, postData, function(results){
      initController();
    });

  };
};
