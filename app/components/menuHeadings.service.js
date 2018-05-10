angular.module('app').service('menuHeadingsService', MenuHeadingsService);

MenuHeadingsService.$inject = ['$http', 'apiUrl'];

function MenuHeadingsService($http, apiUrl){
  console.log('menuHeadingsService');
  var theURL = apiUrl + '/menus';
  this.getHeadings = function(cb){
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
  this.addHeading = function(postData, cb){
    $http.post(
      theURL,
      postData
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
