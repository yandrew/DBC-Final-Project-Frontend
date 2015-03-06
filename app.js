var app = angular.module('sellMe',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/marketPlace');
  $stateProvider
    .state('marketPlace',{
      url: '/marketPlace',
      templateUrl: 'templates/marketPlace.html',
      controller: 'MarketCtrl'
    })
})
