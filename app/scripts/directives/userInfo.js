'use strict';

angular.module('userDirective', []).
	directive('userInfo', function (Resume){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/userInfo.html',
			link: function( scope, element, attrs) {
				scope.resume = Resume.get();
			}

		}
	});