angular.module('app').directive('editinfo', EditDirective);

EditDirective.$inject = ['updateEmpService'];

function EditDirective(updateEmpService){
  return {
    restrict: 'A',
    templateUrl: 'assets/partials/editinfo.view.html',
    scope: {
      value: '=editinfo',
      field: '@fieldType',
      property: '@id',
      empID: '=empid'
    },
    controller: ['$scope', function($scope){
      console.log('editinfo directive controller');
      console.log($scope.property);
      console.log($scope.value);
      console.log($scope.$parent.value);
      console.log($scope.empID);
      $scope.editor = {
        showing: false,
        value: $scope.value
      };
      $scope.toggleEditor = function(){
        $scope.editor.showing = !$scope.editor.showing;
      };
      $scope.field = ($scope.field) ? $scope.field : 'text';
      $scope.save = function(){
        // create a service to update employee
        var data = {};
        data[$scope.property] = $scope.editor.value;
        updateEmpService.updateEmp($scope.empID,data,function(){
          $scope.toggleEditor();
        });

      };
    }]
  };
};
