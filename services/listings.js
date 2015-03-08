app.factory('Listings', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000/listings';
  var listings = [];
  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        if (data.listing.length != listings.length){
          for (var i = 0; i < data.listing.length; i++) {
            listings.push(data.listing[i]);
          }
          // for (item in data.listing) {
          //   listings.push(data.listing[item]);
          // }
        }
      }).error(function(err){
        console.log("Listings data not found: " + err);
      });
    },
    all: function() {
      return listings;
    },
    add: function(listing) {
      listings.push(listing);
    },
    remove: function(listing) {
      listings.splice(listings.indexof(listing), 1);
    },

  };
});
