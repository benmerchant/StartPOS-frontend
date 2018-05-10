angular.module('app').controller('createStoreCtrl', CreateStoreController);

CreateStoreController.$inject = ['$rootScope', '$cookies', 'createRestaurantService'];

function CreateStoreController($rootScope, $cookies, createRestaurantService){
  console.log('createStoreCtrl');
  var vm = this;

  initController();

  function initController(){
    vm.storeObj = {};
    vm.postSuccess = false;
  };

  vm.createStore = function(){
    var postData = {
      store_number: vm.storeObj.storeNo,
      name: vm.storeObj.name,
      state_tax: vm.storeObj.state_tax,
      local_tax: vm.storeObj.local_tax
    };
    createRestaurantService.createRestaurant(postData, function(results){
      vm.postSuccess = true;
      console.log(results);
      $rootScope.storeID = results.restaurant._id;
      // sotre user details in globals cookie keep user logged in for 1 hour
      var today = new Date();
      var cookieExp = new Date(today);
      cookieExp.setHours(cookieExp.getHours() + 24);
      $cookies.putObject('storeID', $rootScope.storeID, {expires: cookieExp});
    });
  };
};
