var app = angular.module('sellMe',['ui.router', 'ngAnimate', 'mgcrea.ngStrap', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main/listings');
  $stateProvider
    .state('main',{
      url: '/main',
      abstract: true,
      views: {
        'main-container': {
          templateUrl: 'templates/maincontainer.html'
        },
        'top-menu': {
          templateUrl: 'templates/topmenu.html',
          controller: 'TopMenuCtrl'
        }
      },
       onEnter: function(Listing, User) {
        Listing.update();
        //User.update();
       }
    })
    .state('main.listings', {
      url: '/listings',
      views: {
        'listings': {
          templateUrl: 'templates/listings.html',
          controller: 'ListingsCtrl'
        }
      }
    })
    .state('main.offers', {
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
    .state('main.mylistings',{
      url: '/mylistings',
      views: {
        'mylistings': {
          templateUrl: 'templates/myListings.html',
          controller: 'MyListingsCtrl'
        }
      },
      onEnter: function(Listing) {
        Listing.update();
      }
    })
    .state('main.listing', {
      url: '/{listingId:int}',
      views: {
        'listing-details': {
          templateUrl: 'templates/listingDetails.html',
          controller: 'ListingCtrl',
          resolve: {
           listing: function($stateParams, Listing){
             return Listing.findById($stateParams.listingId)
           }
          }
        }
      }
    })
    .state('main.myoffers',{
      url: '/myoffers',
      views: {
        'myoffers': {
          templateUrl: 'templates/myOffers.html',
          controller: 'MyOffersCtrl'
        }
      }
    })
    .state('main.newListing', {
      url: '/new_listing',
      views: {
        'newlisting': {
          templateUrl: 'templates/new_listing.html',
          controller: 'NewListingCtrl',
          resolve: {
            'loggedUser': function(Auth){
              return Auth.authorize();
            }
          }
        }
      }
    })
    .state('main.newUser', {
      url: '/new_user',
      views: {
        'newuser': {
          templateUrl: 'templates/new_user.html',
          controller: 'NewUserCtrl'
        }
      }
    })
    .state('main.profile', {
      url: '/profile',
      views: {
        'profile': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl',
          resolve: {
            loggedUser: function(Auth){
              return Auth.authorize();
            }
          }
        }
      }
    })
    .state('main.login', {
    url: '/login',
    views: {
      'login': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
     }
    })
});
