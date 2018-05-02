var app = angular.module('app', ['ngRoute', 'ngSanitize'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      controller: 'indexCtrl',
      templateUrl: 'assets/partials/home.html'
    })
    .when('/employees', {
      controller: 'employeeCtrl',
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
  }]);
