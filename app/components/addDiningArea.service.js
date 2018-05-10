angular.module('app').service('addDiningAreaService', AddDiningAreaService);

AddDiningAreaService.$inject = ['$http', 'apiUrl'];

function AddDiningAreaService($http, apiUrl){
  console.log('addDiningAreaService');
  var theURL = apiUrl + '/restaurant';
  this.addDiningArea = function(storeID, data, cb){
    $http.put(
      theURL + '/add/diningarea/' + storeID,
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
