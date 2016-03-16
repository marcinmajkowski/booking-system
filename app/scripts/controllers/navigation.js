'use strict';

angular.module('bookingSystemApp')
  .controller('NavigationCtrl', function ($scope, loginService) {
    $scope.loginService = loginService;
  });
