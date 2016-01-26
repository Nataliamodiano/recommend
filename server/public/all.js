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
  .controller('homeController', function(recommendService) {
    vm = this;
    vm.title = "This is home";
    vm.message = 'Welcome!';
    vm.date = new Date();
    recommendService.movies()
      .then(function success(response) {
      vm.data = response.data.data;
      })
  });
angular.module('recommend')
   .controller('joinController', function() {
     vm = this;
     vm.title = "Join Us.";
     vm.message = 'Thanks for joining!';
   });

angular.module('recommend')
  .factory('recommendService', function($http) {
    var getMovies= function(){
      return $http({
      method: 'GET',
      url: '/data'
    })
  }
  return {
    movies: getMovies
    }
  });