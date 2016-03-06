'use strict';

describe('Controller: BookingCtrl', function () {

  // load the controller's module
  beforeEach(module('bookingSystemApp'));

  var BookingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookingCtrl = $controller('BookingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(BookingCtrl.awesomeThings.length).toBe(3);
  //});
});
