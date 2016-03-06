'use strict';

/**
 * @ngdoc function
 * @name bookingSystemApp.controller:BookingCtrl
 * @description
 * # BookingCtrl
 * Controller of the bookingSystemApp
 */
angular.module('bookingSystemApp')
  .controller('BookingCtrl', function ($scope, $uibModalInstance) {
    $scope.ok = function () {
      $uibModalInstance.close('ok');
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
