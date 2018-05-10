angular.module('app').service('getRestaurantService', GetRestaurantService);

GetRestaurantService.$inject = ['$http', 'apiUrl'];

function GetRestaurantService($http, apiUrl){
  var theURL = apiUrl + '/restaurant';
  console.log('getRestaurantService');
  this.getRestaurant = function(storeID, cb){
    $http.get(
      theURL + '/' + storeID
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
};
