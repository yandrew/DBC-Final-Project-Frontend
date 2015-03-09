app.factory('Listing', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000/listings';
  var listings = [];
  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        for (item in data) {
          listings.push(data[item])
        }
      }).error(function(err){
        console.log("Listings data not found: " + err)
      })
    },
    all: function() {
      return listings
    },
    add: function(listing) {
      listings.push(listing)
    },
    remove: function(listing) {
      listings.splice(listings.indexof(listing), 1)
    },
    findById: function(listingId) {
      var listingFound;
      listings.forEach(function(elem){
        if (elem.listing_id === listingId) {
          console.log('HERE', elem)
          listingFound = elem;
        }
      })
      return listingFound;
    },
    postNew: function(params){
      return $http.post('http://localhost:3000/listings/', params)
    }
  }
})


    // "listing_id": 1,
    // "product_id": 6,
    // "name": "Sleek Cotton Chair",
    // "category": "Baby Transport Accessories",
    // "image_url": "http://lorempixel.com/400/200/technics/2",
    // "description": "lavender",
    // "condition": "new",
    // "created_at": "2015-03-09T02:13:03.467Z",
    // "expires_at": "2015-03-13T18:15:24.000Z",
    // "username": "tommie.okeefe",
    // "max_price": 286.0,
    // "accept_price": 47.0,
    // "lowest_offer": 156.136708215258