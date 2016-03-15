'use strict';

angular.module('bookingSystemApp')
  .controller('BookingCtrl', function ($log, $scope, $uibModalInstance, loginService, training) {
    $scope.loginService = loginService;

    $scope.training = training;

    $scope.ok = function () {
      $uibModalInstance.close({});
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss({});
    };
  });
