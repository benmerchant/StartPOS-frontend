angular.module('app').service('updateEmpService', UpdateEmployeeService);

UpdateEmployeeService.$inject = ['$http'];

var apiGetEmployeeURL = 'http://localhost:3005/api/employees';

function UpdateEmployeeService($http){
  console.log('updateEmpService');
  this.updateEmp = function(empID, data, cb){
    $http.put(
      apiGetEmployeeURL +'/' + empID,
      data
    ).then(function(response){
      if(response.status===200){
        console.log('api call successful. Response:');
        console.log(response.data);
        cb(response.data);
      }
    }, function(errorCallback){
      console.log('api failure');
      if(errorCallback.status === 400){
        console.log(errorCallback.data);
        cb('error');
      }
    });
  };
};
