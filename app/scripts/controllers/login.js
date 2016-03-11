'use strict';

angular.module('bookingSystemApp')
  .controller('LoginCtrl', function ($log, $scope, $uibModalInstance, loginService) {
    $scope.credentials = {};
    $scope.error = false;

    var authenticationSuccessCallback = function(data) {
      $log.info(data);
      $scope.error = false;
      $scope.ok();
    };

    var authenticationErrorCallback = function() {
      $scope.error = true;
    };

    $scope.login = function () {
      loginService.authenticate($scope.credentials, authenticationSuccessCallback, authenticationErrorCallback);
    };

    $scope.ok = function () {
      $uibModalInstance.close($scope.credentials);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss({});
    };
  });
