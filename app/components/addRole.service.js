angular.module('app').service('addRoleService', AddRoleService);

AddRoleService.$inject = ['$http', 'apiUrl'];




function AddRoleService($http, apiUrl){
  var apiRolesURL = apiUrl + '/roles';
  this.addRole = function(dataToPost, cb){
    $http.post(
      apiRolesURL,
      dataToPost
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
