(function() {
  'use strict';
  angular
  .module("capstone.cities")
  .controller("capstone.cities.CitiesController", CitiesController);

    CitiesController.$inject = ["capstone.cities.City"];
    function CitiesController(City){
      var vm = this;
      vm.cities;
      vm.city;

      activate();
      return;

      function activate() {
        newCity();
      }

      function newCity() {
        vm.city = new City();
      }

      function create() {

      }

      function edit(object) {
      }

      function update() {

      }

      function remove() {

      }

      function removeElement(elements, element) {

      }

      function handleError(response) {
        console.log(response);
      }
    }
}());
