'use strict';

/**
 * @ngdoc function
 * @name bookingSystemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookingSystemApp
 */
angular.module('bookingSystemApp')
  .controller('MainCtrl', function ($scope, $log, loginService, bookingService, trainingService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.trainings = [];

    //TODO global api health status
    $scope.connected = false;

    function activate() {
      return getTrainings().then(function () {
        $log.info('Activated Trainings View');
      });
    }

    activate();

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
  });
