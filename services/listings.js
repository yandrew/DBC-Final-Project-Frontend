app.factory('Listings', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000/listings';
  var listings = [];
  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        if (data.length != listings.length){
          for (item in data) {
            listings.push(data[item])
          }
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

  }
})
