angular.module('app').controller('loginCtrl', LoginController);

LoginController.$inject = ['$scope', '$http', '$cookies', '$rootScope', '$location'];

function LoginController($scope, $http, $cookies, $rootScope, $location){
  console.log('loginCtrl');

  initController();

  function initController(){
    // logout whenever this route is taken
    $rootScope.globals = {};
    $cookies.remove('globals');
    $http.defaults.headers.common.Authorization = '';
  };



  var apiLoginURL = 'http://localhost:3005/api/login';

  $scope.login = function(){
    $http.post(
      apiLoginURL,
      {email: $scope.email, password: $scope.password}
    ).then(function(response){
      if(response.status===200){ // successfully logged in
        // set global variables
        $rootScope.globals = {
          currentUser: {
            email: $scope.email,
            token: response.data.token
          },
          auth: response.data.auth
        };
        // set default Authorization header for ALL http requests
        $http.defaults.headers.common['Authorization'] = 'JWT' + response.data.token;

        // sotre user details in globals cookie keep user logged in for 1 hour
        var today = new Date();
        var cookieExp = new Date(today);
        cookieExp.setMinutes(cookieExp.getMinutes() + 60);
        $cookies.putObject('globals', $rootScope.globals, {expires: cookieExp});

        $location.path('/');
      }
    }, function(errorCallback){
      if(errorCallback.status === 400){
        console.log(errorCallback.data);
      }
    });
  };
};
