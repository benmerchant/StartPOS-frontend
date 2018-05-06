'use strict';
angular.module('app', ['ngRoute', 'ngSanitize', 'ngCookies']).config(config).run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    controller: 'indexCtrl',
    templateUrl: 'assets/partials/home.html'
  })
  .when('/dashboard', {
    controller: 'dashboardCtrl',
    templateUrl: 'assets/partials/dashboard.html'
  })
  .when('/employees', {
    controller: 'employeeCtrl',
    controllerAs: 'emps',
    templateUrl: 'assets/partials/employee.html'
  })
  .when('/menu', {
    controller: 'menuCtrl',
    templateUrl: 'assets/partials/menu.html'
  })
  .when('/login', {
    controller: 'loginCtrl',
    templateUrl: 'assets/partials/login.html'
  })
  .otherwise({
    template: '<h1>404</h1>'
  });
  $locationProvider.html5Mode(true);
};

run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
function run($rootScope, $location, $cookies, $http){
  // not really worried if user stays logged in after refresh
  // as you can't refresh anything but the index right now anyways
  // $rootScope.globals = $cookies.getObject('globals') || {};
  // if($rootScope.globals.currentUser){
  //   $http.defaults.headers.common['Authorization'] = 'JWT' + $rootScope.globals.currentUser.token;
  // } else {
  //   $rootScope.globals.auth = false;
  // }
};
