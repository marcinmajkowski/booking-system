'use strict';

/**
 * @ngdoc service
 * @name bookingSystemApp.trainingService
 * @description
 * # trainingService
 * Factory in the bookingSystemApp.
 */
angular.module('bookingSystemApp')
  .factory('trainingService', function ($log, $http, API_ROOT) {
    // Service logic
    // ...
    function getTrainings() {
      function getCompleted(response) {
        $log.info(response);
        return response.data._embedded.trainings;
      }

      function getFailed(error) {
        $log.error('XHR Failed for get trainings.' + error.data);
      }

      return $http.get(API_ROOT + 'v1/trainings')
        .then(getCompleted)
        .catch(getFailed);
    }

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getTrainings: getTrainings
    };
  });
