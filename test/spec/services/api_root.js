'use strict';

describe('Service: APIROOT', function () {

  // load the service's module
  beforeEach(module('bookingSystemApp'));

  // instantiate service
  var APIROOT;
  beforeEach(inject(function (_APIROOT_) {
    APIROOT = _APIROOT_;
  }));

  it('should do something', function () {
    expect(!!APIROOT).toBe(true);
  });

});
