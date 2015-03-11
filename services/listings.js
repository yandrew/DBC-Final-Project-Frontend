app.factory('Listing', function($http, $q, $rootScope) {
  var urlBase = 'http://sellme.herokuapp.com';
  var listings = [];
  console.log('in listings service')
  return {
    update: function() {
      $http.get(urlBase + '/listings').success(function(data){
        while (listings.length > 0) {
          listings.pop();
        }
        for (item in data) {
          listings.push(data[item])
        }
        console.log('Listings retrieved')
      }).error(function(err){
        console.log("Listings data not found: ")
      })
    },
    all: function() {
      if (listings === []) this.update()
      return listings
    },
    add: function(listing) {
      listings.push(listing)
    },
    remove: function(listingId) {
      $http.delete(urlBase + '/listings/' + listingId).success(function(){
        console.log("Listing was deleted")
      })
    },
    findById: function(listingId) {
      return $http.get(urlBase + '/listings/' + listingId)
    },
    postNew: function(params){
      return $http.post(urlBase + '/listings/', params)
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