'use strict';

function ResumeCtrl( $scope, Resume ) {
	$scope.resume = Resume.get();
};

function JobCtrl( $scope ){
	console.log($scope.job);
}
ResumeCtrl.$inject = ['$scope', 'Resume'];
JobCtrl.$inject = ['$scope'];