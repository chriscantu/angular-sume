'use strict';

angular.module('angularSume', ['resumeSvc', 'navDirective', 'userDirective'])
    .config( function ($routeProvider) { 
    $routeProvider
        .when('/', {
            templateUrl: 'views/profile.html',
            controller: 'ResumeCtrl'
        })
        .when('/acheivements', {
        	templateUrl: 'views/acheivements.html',
        	controller: 'ResumeCtrl'
        })
        .when('/experience', {
            templateUrl: 'views/experience.html',
            controller: "ResumeCtrl"
        })
        .when('/training', {
            templateUrl: 'views/training.html',
            controller: "ResumeCtrl"
        })
        .otherwise({ redirectTo: '/' });
  });
