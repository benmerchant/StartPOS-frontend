angular.module('app').service('createRestaurantService', CreateRestaurantService);

CreateRestaurantService.$inject = ['$http','apiUrl'];



function CreateRestaurantService($http, apiUrl){
  var apiCreateRestaurantURL = apiUrl+'/restaurant';
  console.log('createRestaurantService');
  this.createRestaurant = function(newStoreData, cb){
    $http.post(
      apiCreateRestaurantURL,
      newStoreData
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
