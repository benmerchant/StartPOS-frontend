angular.module('app').service('getEmpsService', EmployeeService);

EmployeeService.$inject = ['$http', 'apiUrl'];




function EmployeeService($http, apiUrl){
  var apiGetEmployeeURL = apiUrl + '/employees';
  console.log('EmployeeService');
  this.getEmployees = function(cb){
    $http.get(
      apiGetEmployeeURL
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

  this.getOneEmployee = function(empID, cb){
    $http.get(
      apiGetEmployeeURL + '/' + empID
    ).then(function(response){
      if(response.status===200){
        console.log('api call successful. Response:');
        console.log(response.data);
        cb(response.data.employee);
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
