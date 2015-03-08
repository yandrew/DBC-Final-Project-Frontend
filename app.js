var app = angular.module('sellMe',['ui.router','mgcrea.ngStrap']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products');
  $stateProvider
    .state('marketPlace',{
      url: '/marketPlace',
      views: {
        'main-container': {
          templateUrl: 'templates/marketPlace.html',
          controller: 'SearchCtrl'
        },
        'left-sidebar': {
          templateUrl: 'templates/leftmenu.html'
        },
        'right-sidebar': {
          templateUrl: 'templates/rightmenu.html'
        }
      }
    })
    .state('products',{
      url: '/products',
      views: {
        'main-container': {
          templateUrl: 'templates/products_display.html',
          controller: 'SearchCtrl'
        },
        'left-sidebar': {
          templateUrl: 'templates/leftmenu.html'
        },
        'right-sidebar': {
          templateUrl: 'templates/rightmenu.html'
        }
      }
    })
    .state('myListings',{
      url: '/mylistings',
      views: {
        'main-container': {
          templateUrl: 'templates/myListings.html',
          controller: 'MyListingsCtrl'
        },
        'left-sidebar': {
          templateUrl: 'templates/leftmenu.html'
        },
        'right-sidebar': {
          templateUrl: 'templates/rightmenu.html'
        }
      }
    })
});
