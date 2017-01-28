(function() {
  "use strict";
  angular
    .module("capstone")
    .config(RouterFunction);
  /*used to avoid data loss during minification*/
  RouterFunction.$inject = ["$stateProvider", /*injected to define new states(views)*/
                            "$urlRouterProvider", /*used to define default path*/
                            "capstone.APP_CONFIG"];/*used to point default template page*/

  /*we dont need to define the namespace in the third param, because it is positional, when can choose the name*/
  function RouterFunction($stateProvider, $urlRouterProvider, APP_CONFIG) {
    $stateProvider
    .state("home",{
      url: "/",
      templateUrl: APP_CONFIG.main_page_html
    });
    $urlRouterProvider.otherwise("/");
  }
})();
