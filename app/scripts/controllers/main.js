'use strict';

/**
 * @ngdoc function
 * @name bookingSystemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookingSystemApp
 */
angular.module('bookingSystemApp')
  .controller('MainCtrl', function ($scope, $log, bookingService, trainingService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.trainings = [];

    activate();

    function activate() {
      return getTrainings().then(function () {
        $log.info('Activated Trainings View');
      });
    }

    function getTrainings() {
      return trainingService.getTrainings()
        .then(function (data) {
          $scope.trainings = data;
          return $scope.trainings;
        });
    }

    $scope.cokolwiek = 'test';
  });
