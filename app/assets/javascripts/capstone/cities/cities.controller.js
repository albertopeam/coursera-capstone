(function() {
  'use strict';
  angular
  .module("capstone.cities")
  .controller("capstone.cities.CitiesController", CitiesController);

    CitiesController.$inject = ["$scope", "capstone.cities.City"];
    function CitiesController($scope, City){
      var vm = this;
      vm.cities;
      vm.city;
      vm.edit   = edit;
      vm.create = create;
      vm.update = update;
      vm.remove = remove;
      $scope.changeName = changeName;

      activate();
      return;

      function activate() {
        newCity();
      }

      function changeName(){
        if (vm.city.name === undefined) {
          newCity();
        }
      }

      function newCity() {
        vm.city = new City();
        vm.cities = City.query();
      }

      function create() {
        vm.city.$save()
          .then(function(response){
            vm.cities.push(vm.city);
            newCity();
          })
          .catch(handleError);
      }

      function edit(object) {
        vm.city = object;
      }

      function update() {
        vm.city.$update()
          .then(function(response){
        })
        .catch(handleError);
      }

      function remove() {
        vm.city.$delete()
          .then(function(response){
            //remove the element from local array
            removeElement(vm.cities, vm.city);
            //replace edit area with prototype instance
            newCity();
          })
          .catch(handleError);
      }

      function removeElement(elements, element) {
        for (var i=0; i<elements.length; i++) {
          if (elements[i].id == element.id) {
            elements.splice(i,1);
            break;
          }
        }
      }

      function handleError(response) {
        console.log(response);
      }
    }
}());
