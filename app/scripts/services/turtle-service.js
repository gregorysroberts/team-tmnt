'use strict';

angular.module('teamTmntApp')
  .service('TurtleService', function TurtleService($q, $http) {
  	return {
	    getTeams: function() {
	  	var deferred = $q.defer();

	  	$http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team'}).success(function(data) {
	      deferred.resolve(data);
	    	}
	  	);
	  	return deferred.promise;
		}
	}
  });
