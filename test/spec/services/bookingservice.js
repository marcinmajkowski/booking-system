'use strict';

describe('Service: bookingService', function () {

  // load the service's module
  beforeEach(module('bookingSystemApp'));

  // instantiate service
  var bookingService;
  beforeEach(inject(function (_bookingService_) {
    bookingService = _bookingService_;
  }));

  it('should do something', function () {
    expect(!!bookingService).toBe(true);
  });

});
