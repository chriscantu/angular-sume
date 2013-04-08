'use strict';

angular.module('navDirective', []).
	directive('navBar', function (){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/navBar.html'
		}
	});