'use strict';

describe('Service: API_ROOT', function () {

  // load the service's module
  beforeEach(module('bookingSystemApp'));

  // instantiate service
  var API_ROOT;
  beforeEach(inject(function (_API_ROOT_) {
    API_ROOT = _API_ROOT_;
  }));

  it('should do something', function () {
    expect(!!API_ROOT).toBe(true);
  });

});
