angular.module('app').controller('menuHeadingsCtrl', MenuHeadingsController);

MenuHeadingsController.$inject = ['menuHeadingsService'];

function MenuHeadingsController(menuHeadingsService){
  console.log('menuHeadingsCtrl');
  var vm = this;

  // psuedo documents
  vm.printers = [
    {_id: 'q73bbyayvb5', name:'Kitchen'},
    {_id: 'abyerxdnu45', name:'Salads'},
    {_id: 'e7n6uaysb5b', name:'Fryer'},
    {_id: 'br6unbu65b6', name:'Bar'}];
  initController(); getHeadings();

  function initController(){
    vm.addSuccess = false;
    vm.showAddForm = false;
    vm.newMenu = {};
  };

  function getHeadings(){
    menuHeadingsService.getHeadings(function(results){
      vm.headings = results.menus;
    });
  };

  vm.addNew = function(){
    initController();
    vm.showAddForm = true;
  };

  vm.sendNewMenu = function(){
    var PostData = {
      menu_heading: vm.newMenu.name,
      printer: vm.newMenu.printer
    };
    // send it to Mongo
    menuHeadingsService.addHeading(PostData, function(results){
      vm.addSuccess = true;
      initController(); getHeadings();
    });


  };


  vm.cancelAdd = function(){
    initController();
  };

  vm.edit = function(){
    console.log('edit a heading');
    initController();
  };

  vm.delete = function(){
    console.log('delete a heading');
    initController();
  };

};
