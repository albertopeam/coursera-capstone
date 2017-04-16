(function() {
  "use strict";

  angular
    .module("spa-demo.types")
    .component("sdTypes", {
      templateUrl: templateUrl,
      controller: TypesController
    });

  templateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.types_html;
  }

  TypesController.$inject = ['$scope', "spa-demo.types.Type"];
  function TypesController($scope, Type) {
    var vm = this;
    vm.types = [];
    vm.selectedType = null;
    $scope.changeSelectedType = selectedTypeChanged;

    activate();
    return;

    function activate() {
      loadTypes();
    }

    function loadTypes(){
      Type.query().$promise
        .then(function(response){
          vm.types = response;
        }).catch(function(error){
          console.log("types error: " + error);
        });
    }


    function selectedTypeChanged(selected){
      console.log("selectedTypeChanged", selected);
      //TODO: load things for type: things::search/type=id
    }
  }
})();
