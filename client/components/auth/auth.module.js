'use strict';

angular.module('vestaApp.auth', [
  'vestaApp.constants',
  'vestaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
