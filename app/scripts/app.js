'use strict';

angular.module('angularSume', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ResumeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
