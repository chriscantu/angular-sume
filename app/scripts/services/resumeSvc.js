'use strict';

angular.module('resumeSvc', ['ngResource']).
	factory('Resume', function( $resource ) {
		return $resource('/data/resume.json', {} );
	});