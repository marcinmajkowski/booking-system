'use strict';

angular.module('bookingSystemApp')
  .controller('MainCtrl', function ($scope, loginService, bookingService, trainingService) {
    $scope.trainings = [];

    //TODO global api health status
    $scope.connected = false;

    function getTrainings() {
      return trainingService.getTrainings()
        .then(function (data) {
          $scope.trainings = data;
          $scope.connected = true;
          return $scope.trainings;
        });
    }

    $scope.open = function(training) {
      if (loginService.authenticated) {
        bookingService.openBookingModal(loginService.customer, training);
      } else {
        loginService.openLoginModal().result.then(function () {
          bookingService.openBookingModal(loginService.customer, training);
        });
      }
    };

    getTrainings();
  });
