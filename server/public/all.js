angular.module('recommend', ['ngRoute']);

angular.module('recommend')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when("/join", {
        templateUrl: "app/join/join.html",
        controller: "joinController",
        controllerAs: "join"
      });
  }])

angular.module('recommend')
   .controller('homeController', function() {
     vm = this;
     vm.title = "This is home";
     vm.message = 'Welcome!';
     vm.date = new Date();
   });
angular.module('recommend')
   .controller('joinController', function() {
     vm = this;
     vm.title = "Join Us.";
     vm.message = 'Thanks for joining!';
   });
