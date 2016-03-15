'use strict';

/**
 * @ngdoc service
 * @name bookingSystemApp.bookingService
 * @description
 * # bookingService
 * Factory in the bookingSystemApp.
 */
angular.module('bookingSystemApp')
  .factory('bookingService', function ($log, $http, $uibModal, ENV) {
    // Service logic
    // ...
    function get() {
      function getCompleted(response) {
        $log.info(response);
        return response.data._embedded.bookings;
      }

      function getFailed(error) {
        $log.error('XHR Failed for get bookings.' + error.data);
      }

      return $http.get(ENV.apiEndpoint + '/v1/bookings')
        .then(getCompleted)
        .catch(getFailed);
    }

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      get: get,
      openBookingModal: function (customer, training) {
        return $uibModal.open({
          animation: true,
          templateUrl: 'views/booking.html',
          controller: 'BookingCtrl',
          size: 'md',
          resolve: {
            customer: function () {
              return customer;
            },
            training: function () {
              return training;
            }
          }
        });
      },
      bookTraining: function (customer, training) {
        $log.info(customer);
        $log.info(training);
        $http.post(ENV.apiEndpoint + '/v1/bookings', {
          customer: customer._links.self.href,
          training: training._links.self.href
        }).then(function (response) {
          $log.info(response);
        });
      }
    };
  });
