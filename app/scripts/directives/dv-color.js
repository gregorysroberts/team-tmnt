'use strict';

angular.module('teamTmntApp')
  .directive('dvColor', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dvColor directive');
      }
    };
  });
