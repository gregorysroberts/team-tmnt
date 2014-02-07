'use strict';

angular.module('teamTmntApp', [
	'ui.router'
])
	.config(function ($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      resolve: {
  		  'teams': function(TurtleService) {
    	     return TurtleService.getTeams();
  		}
	  }
    })
    .state('team', {
      url: "/team/:teamId",
      templateUrl: "views/teamview.html",
      controller: 'TeamCtrl',
      resolve:  {
        'team': function($stateParams, TurtleService) {
          return TurtleService.getTeam($stateParams.teamId);
          }
        }
      });
    });