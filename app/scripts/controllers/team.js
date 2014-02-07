'use strict';

angular.module('teamTmntApp')
  .controller('TeamctrlCtrl', function ($scope, team) {
    $scope.team = team[0];
  });
