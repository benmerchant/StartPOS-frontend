angular.module('app').controller('diningAreasCtrl', DiningAreasController);

DiningAreasController.$inject = [
  '$rootScope',
  '$cookies',
  'getRestaurantService',
  'addDiningAreaService',
  'addTableService',
  'getTablesService'
];

function DiningAreasController($rootScope, $cookies, getRestaurantService, addDiningAreaService, addTableService, getTablesService){
  console.log('diningAreasCtrl');
  var vm = this;
  var storeID = $cookies.getObject('storeID');
  console.log(storeID);

  initController();
  getRestaurant(); // had to split out of init. wasted http requests on cancels


  function initController(){
    vm.showNewForm = false;
    vm.newArea = {};
    vm.addSuccess = false;
    vm.showAddTableForm = false;
    vm.editAreaObj = {};
    vm.newTable = {};
    vm.addTableSuccess = false;

  };
  function getRestaurant(){
    getRestaurantService.getRestaurant(storeID, function(results){
      dining_areas = results.restaurant.dining_areas;
      // console.log(dining_areas);
      getTables(function(){
        displayAreas(dining_areas, tables);
      });
    });
  };
  function getTables(cb){
    getTablesService.getTables(function(results){
      tables = results.tables;
      // console.log(tables);
      cb(tables);
    });
  };
  // create a nicer object for the view to work with
  function displayAreas(dining_areas, tables){
    var niceAreas = [];
    var tables = tables;
    dining_areas.forEach(function(area){
      var theseTables = [];
      tables.forEach(function(table){
        if(table.dining_area === area._id){
          theseTables.push(table);
        }
      });
      // add a new object to the niceAreas area for each area
      niceAreas.push({
        _id: area._id,
        name: area.name,
        tables: theseTables
      });
    });
    vm.niceAreas = niceAreas;
    console.log(vm.niceAreas);
  };

  vm.showDiningForm = function(){
    initController();
    vm.showNewForm = true;
  };

  vm.cancelAdd = function(){
    initController();
  };

  vm.sendNewArea = function(){
    var PutData = {
      new_dining_area: vm.newArea.name
    };
    console.log(PutData);
    addDiningAreaService.addDiningArea(storeID, PutData, function(){
      initController();
      vm.addSuccess = true;
      getRestaurant();
    });
  };

  vm.addTables = function(areaID, areaName){
    initController();
    console.log('edit area button');
    vm.showAddTableForm = true;
    vm.editAreaObj = {
      id: areaID,
      name: areaName
    };
  };

  vm.sendNewTable = function(areaID){
    console.log(areaID);
    var PostData = {
      dining_area: areaID,
      name: vm.newTable.name,
      seats: vm.newTable.seats
    };
    console.log(PostData);
    addTableService.addTable(PostData, function(result){
      initController();
      vm.addTableSuccess = true;
      getRestaurant();

    });
  };

  vm.cancelNewTable = function(){

    initController();
  };

  vm.deleteArea = function(areaID, areaName){
    initController();
    console.log('delete area button: '+areaID);
  };


  // addDiningAreaService.addDiningArea(storeID, putData, function(result){
  //
  // });

};
