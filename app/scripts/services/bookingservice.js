'use strict';

/**
 * @ngdoc service
 * @name bookingSystemApp.bookingService
 * @description
 * # bookingService
 * Factory in the bookingSystemApp.
 */
angular.module('bookingSystemApp')
  .factory('bookingService', function ($log, $http, API_ROOT) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      get: get
    };

    function get() {
      return $http.get(API_ROOT + 'v1/bookings')
        .then(getCompleted)
        .catch(getFailed);

      function getCompleted(response) {
        $log.info(response);
        return response.data._embedded.bookings;
      }

      function getFailed(error) {
        $log.error('XHR Failed for get bookings.' + error.data);
      }
    }
  });