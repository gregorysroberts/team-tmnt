'use strict';

describe('Directive: dvTable.html', function () {

  // load the directive's module
  beforeEach(module('teamTmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-table.html></dv-table.html>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dvTable.html directive');
  }));
});
