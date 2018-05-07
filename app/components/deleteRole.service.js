angular.module('app').service('deleteRoleService', DeleteRoleService);

DeleteRoleService.$inject = ['$http'];

var apiRolesURL = 'http://localhost:3005/api/roles';

function DeleteRoleService($http){
  this.deleteRole = function(roleID, cb){
    $http.delete(
      apiRolesURL +'/'+ roleID
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
