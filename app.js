var app = angular.module('sellMe',['firebase', 'ui.router', 'ngAnimate', 'mgcrea.ngStrap']);  

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/listings');
  $stateProvider
    .state('marketPlace',{
      url: '/marketPlace',
      templateUrl: 'templates/marketPlace.html',
      controller: 'MarketCtrl'
    })
    .state('listings',{
      url: '/listings',
      views: {
        'main-container': {
          templateUrl: 'templates/listings.html',
          controller: 'ListingsCtrl'
        },
        'top-menu': {
          templateUrl: 'templates/topmenu.html',
          controller: 'TopMenuCtrl'
        }
      }
    })
    .state('listings.offers', {
      url: '/offers/{listingId:int}',
      views: {
        'offers': {
          templateUrl: 'templates/offers.html',
          controller: 'OffersCtrl',
          resolve: {
            listing: function($stateParams, Listing){
              return Listing.findById($stateParams.listingId)
            }
          } 
        }
      }
    })
})