'use strict';

describe('Service: trainingService', function () {

  // load the service's module
  beforeEach(module('bookingSystemApp'));

  // instantiate service
  var trainingService;
  beforeEach(inject(function (_trainingService_) {
    trainingService = _trainingService_;
  }));

  it('should do something', function () {
    expect(!!trainingService).toBe(true);
  });

});
