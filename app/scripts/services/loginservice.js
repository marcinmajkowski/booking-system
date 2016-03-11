'use strict';

/**
 * @ngdoc service
 * @name bookingSystemApp.trainingService
 * @description
 * # trainingService
 * Factory in the bookingSystemApp.
 */
angular.module('bookingSystemApp')
  .factory('loginService', function ($log, $http, $uibModal, ENV) {
    // Public API here
    return {
      authenticate: function (credentials, successCallback, errorCallback) {
        var headers = credentials ? {authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)} : {};

        var loginUrl = ENV.apiEndpoint + '/v1/customers/search/findByEmail?email=' + credentials.username;

        var self = this;

        $http.get(loginUrl, {headers: headers}).success(function (data) {
          if (data.email) {
            self.authenticated = true;
            self.customer = data;
            if (successCallback) {
              successCallback(data);
            }
          } else {
            self.authenticated = false;
            if (errorCallback) {
              errorCallback();
            }
          }
        }).error(function () {
          self.authenticated = false;
          if (errorCallback) {
            errorCallback();
          }
        });
      },
      authenticated: false,
      customer: {},
      openLoginModal: function () {
        return $uibModal.open({
          animation: true,
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          size: 'sm',
          resolve: {}
        });
      }
    };
  });
