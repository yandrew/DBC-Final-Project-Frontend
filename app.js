var app = angular.module('sellMe',['firebase', 'ui.router', 'ngAnimate', 'mgcrea.ngStrap']);  

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
<<<<<<< HEAD
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
    .state('userOffers',{
      url: '/user/:user_id/offers',
      views: {
        'main-container': {
          templateUrl: 'templates/myOffers.html',
          controller: 'UserOffersCtrl'
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
=======
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
})
>>>>>>> added forms for listing and user
