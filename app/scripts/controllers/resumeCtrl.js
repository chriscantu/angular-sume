'use strict';

function ResumeCtrl( $scope, Resume ) {
	$scope.resume = Resume.get();
};

ResumeCtrl.$inject = ['$scope', 'Resume'];