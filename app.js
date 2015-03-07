var app = angular.module('sellMe',['ui.router','mgcrea.ngStrap']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products');
  $stateProvider
    .state('marketPlace',{
      url: '/marketPlace',
      templateUrl: 'templates/marketPlace.html',
      controller: 'MarketCtrl'
    })
    .state('products',{
      url: '/products',
      templateUrl: 'templates/products_display.html',
      controller: 'SearchCtrl'
    })
})
