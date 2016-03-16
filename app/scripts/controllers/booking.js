'use strict';

angular.module('bookingSystemApp')
  .controller('BookingCtrl', function ($scope, $uibModalInstance, customer, training, bookingService) {
    $scope.customer = customer;

    $scope.training = training;

    $scope.bookTraining = function (customer, training) {
      bookingService.bookTraining(customer, training);
      $uibModalInstance.close({});
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss({});
    };
  });
