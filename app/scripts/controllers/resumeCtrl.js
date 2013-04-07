'use strict';

function ResumeCtrl( $scope, Resume ) {
	console.log( Resume );
	$scope.resume = { "name": "Chris Cantu"};
};

ResumeCtrl.$inject = ['$scope', 'Resume'];