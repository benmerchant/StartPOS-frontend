angular.module('app').service('getRolesService', GetRolesService);

GetRolesService.$inject = ['$http'];

var apiGetRoles = 'http://localhost:3005/api/roles';

function GetRolesService($http){
  console.log('getRolesService');
  this.getRoles = function(cb){
    $http.get(
      apiGetRoles
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
  }

}
