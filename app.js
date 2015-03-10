var app = angular.module('sellMe',['ui.router', 'ngAnimate', 'mgcrea.ngStrap', 'ngCookies']);  

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
          templateUrl: 'templates/listings.html',
          controller: 'ListingsCtrl'
        },
        'top-menu': {
          templateUrl: 'templates/topmenu.html',
          controller: 'TopMenuCtrl'
        }
      },
       onEnter: function(Listing, User) {
        Listing.update();
        User.update();
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
    .state('listings.mylistings',{
      url: '/mylistings',
      views: {
        'main-container': {
          templateUrl: 'templates/myListings.html',
          controller: 'MyListingsCtrl'
        },
        'top-menu': {
          templateUrl: 'templates/topmenu.html',
          controller: 'TopMenuCtrl'
        }
      },
       onEnter: function(Auth, Listing, User) {
        Listing.update();
        User.update();
       }
    })
    .state('myListings.listing', {
      url: '/{listingId:int}',
      views: {
        'listing-details': {
          templateUrl: 'templates/listingDetails.html',
          controller: 'ListingCtrl',
          resolve: {
           listing: function($stateParams, Listing){
            console.log('stateParams', $stateParams.listingId)
            console.log('resolve listing', Listing.findById($stateParams.listingId))
            console.log('all', Listing.all())
             return Listing.findById($stateParams.listingId)
           }
          }
        }
      }
    })
    .state('userOffers',{
      url: '/user/:user_id/offers',
      views: {
        'main-container': {
          templateUrl: 'templates/myOffers.html',
          controller: 'UserOffersCtrl'
        },
        'top-menu': {
          templateUrl: 'templates/topmenu.html',
          controller: 'TopMenuCtrl'
        }
      }
    })
    .state('listings.newListing', {
      url: '/new_listing',
      views: {
        'newlisting': {
          templateUrl: 'templates/new_listing.html',
          controller: 'NewListingCtrl'
        }
      }
    })
    .state('listings.newUser', {
      url: '/new_user',
      views: {
        'newuser': {
          templateUrl: 'templates/new_user.html',
          controller: 'NewUserCtrl'
        }
      }
    })
    .state('listings.profile', {
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
});
