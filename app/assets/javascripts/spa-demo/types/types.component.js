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

  TypesController.$inject = ['$scope', "spa-demo.types.Type", "spa-demo.subjects.Thing"];
  function TypesController($scope, Type, Thing) {
    var vm = this;
    vm.types = [];
    vm.things = [];
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
      search(selected);
    }

    function search(type){
      var params = {type_id:type.id};
      Thing.search(params).$promise
        .then(function(response){
          vm.things = response;
        })
        .catch(function(error){
          console.log("things search error: ", error);
        });
    }

  }
})();
