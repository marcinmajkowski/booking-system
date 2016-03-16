'use strict';

/**
 * @ngdoc service
 * @name bookingSystemApp.trainingService
 * @description
 * # trainingService
 * Factory in the bookingSystemApp.
 */
angular.module('bookingSystemApp')
  .factory('trainingService', function ($log, $http, ENV) {
    function getTrainings() {
      function getCompleted(response) {
        return response.data._embedded.trainings;
      }

      function getFailed(error) {
        $log.error('XHR Failed for get trainings.' + error.data);
      }

      return $http.get(ENV.apiEndpoint + '/v1/trainings')
        .then(getCompleted, getFailed);
    }

    return {
      getTrainings: getTrainings
    };
  });
