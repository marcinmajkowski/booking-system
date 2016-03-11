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

    $scope.open = function() {

      var modalInstance = loginService.openLoginModal();

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
