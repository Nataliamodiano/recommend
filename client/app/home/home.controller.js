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