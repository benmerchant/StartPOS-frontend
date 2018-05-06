angular.module('app').controller('dashboardCtrl', DashboardController);

DashboardController.$inject = ['$scope'];

function DashboardController($scope, getEmpsService){
  console.log('dashboardCtrl');
};
