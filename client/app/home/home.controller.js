angular.module('recommend')
  .controller('homeController', function($http) {
    vm = this;
    vm.title = "This is home";
    vm.message = 'Welcome!';
    vm.date = new Date();
     
    $http({
      method: 'GET',
      url: '/data'
    }).then(function success(response) {
      vm.data = response.data.data;
    });
  });