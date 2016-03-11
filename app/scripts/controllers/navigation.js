'use strict';

angular.module('bookingSystemApp')
  .controller('NavigationCtrl', function ($scope, $log, $uibModal, loginService) {
    $scope.loginService = loginService;

    $scope.openLoginModal = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        size: 'sm',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (credentials) {
        $scope.credentials = credentials;
        $log.info($scope.credentials);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
