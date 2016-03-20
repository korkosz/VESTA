'use strict';

angular.module('vestaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        template: '<projects></projects>'
      });
  });
