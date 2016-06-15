'use strict';

function NewsController($scope, $http, $log, config, $compile, $timeout, SweetAlert, env, $base64, configService, $cookies, $window) {

var logged_in = sessionStorage.getItem('user_logged_in');
  $scope.loggedIn = false;
  if (logged_in) {
    $scope.loggedIn = true;
  }
}