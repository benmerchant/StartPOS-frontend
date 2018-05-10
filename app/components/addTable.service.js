angular.module('app').service('addTableService', AddTableService);

AddTableService.$inject = ['$http', 'apiUrl'];

function AddTableService($http, apiUrl){
  console.log('addTableService');
  var theURL = apiUrl  + '/tables';
  this.addTable = function(data, cb){
    $http.post(
      theURL,
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
