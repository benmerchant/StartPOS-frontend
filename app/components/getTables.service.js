angular.module('app').service('getTablesService', GetTablesService);

GetTablesService.$inject = ['$http', 'apiUrl'];

function GetTablesService($http, apiUrl){
  console.log('addEmpService');
  var theURL = apiUrl + '/tables';
  this.getTables = function(cb){
    $http.get(
      theURL
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
