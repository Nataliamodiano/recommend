angular.module('recommend')
   .controller('homeController', function() {
     vm = this;
     vm.title = "This is home";
     vm.message = 'Welcome!';
     vm.date = new Date();
   });