'use strict';

angular.module('bookingSystemApp')
  .controller('BookingCtrl', function ($log, $scope, $uibModalInstance, customer, training) {
    $scope.customer = customer;

    $scope.training = training;

    $scope.bookTraining = function (customer, training) {
      $log.info(customer);
      $log.info(training);
      $uibModalInstance.close({});
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss({});
    };
  });
