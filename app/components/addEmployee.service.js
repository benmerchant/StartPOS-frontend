angular.module('app').service('addEmpService', AddEmployeeService);

AddEmployeeService.$inject = ['$http'];

var apiGetEmployeeURL = 'http://localhost:3005/api/employees';

function AddEmployeeService($http){
  console.log('addEmpService');
  this.addEmp = function(data, cb){
    $http.post(
      apiGetEmployeeURL,
      data
    ).then(function(response){
      if(response.status===200){
        console.log('api call successful. Response:');
        console.log(response.data);
        cb(response.data);
      }
    }, function(errorCallback){
      console.log('api failure');
      if(errorCallback.status === 500){
        console.log(errorCallback.data);
        console.log('ERRRORR');
      }
    });
  };
};
