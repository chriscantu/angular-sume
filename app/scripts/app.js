'use strict';

angular.module('angularSume', ['resumeSvc', 'navDirective'])
    .config( function ($routeProvider) { 
    $routeProvider
        .when('/', {
            templateUrl: 'views/profile.html',
            controller: 'ResumeCtrl'
        })
        .otherwise({ redirectTo: '/' });
  });
