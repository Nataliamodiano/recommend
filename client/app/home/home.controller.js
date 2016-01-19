angular.module('recommend')
   .controller('homeController', function($scope) {
     vm = this;
     vm.title = "This is home";
     $scope.message = 'Welcome!';
     $scope.date = new Date();
   });