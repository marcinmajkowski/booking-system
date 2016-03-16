'use strict';

angular.module('bookingSystemApp')
  .factory('bookingService', function ($http, $uibModal, ENV) {
    function openBookingModal(customer, training) {
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
    }

    function bookTraining(customer, training) {
      $http.post(ENV.apiEndpoint + '/v1/bookings', {
        customer: customer._links.self.href,
        training: training._links.self.href
      });
    }

    return {
      openBookingModal: openBookingModal,
      bookTraining: bookTraining
    };
  });
