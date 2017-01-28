(function() {
  "use strict";
  angular
  .module("capstone.cities")
  .directive("sdCities", CitiesDirective);
  //the name of the view is: <cs-cities></cs-cities>

  CitiesDirective.$inject = ["capstone.APP_CONFIG"];
  function CitiesDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.cities_html,
        replace: true, //where the tag sd-foos is defined the replace it for the content of the templateUrl
        bindToController: true,
        controller: "capstone.cities.CitiesController", //the target controller
        controllerAs: "citiesVM", //controller name from view perspective
        restrict: "E",  //Note: When you create a directive, it is restricted to attribute and elements only by default. In order to create directives that are triggered by class name, you need to use the restrict option.
        scope: {}, //isolated scope, no se le pasa nada
        link: link //function to see the directive in the log and inspect
    };
    return directive;

    function link(scope, element, attrs) {
      console.log("CitiesDirective", scope);
    }
  }

  })();
