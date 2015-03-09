var app = angular.module('sellMe',['ui.router','mgcrea.ngStrap']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/listings');
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
    .state('listings',{
      url: '/listings',
      views: {
        'main-container': {
          templateUrl: 'templates/listings_display.html',
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
    });
});
