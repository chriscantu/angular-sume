'use strict';

angular.module('navDirective', []).
	directive('navBar', function ($location){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/navBar.html',
			link: function(scope, element, attrs){
				console.log($location.path())
				scope.path = $location.path();
			}
		}
	});