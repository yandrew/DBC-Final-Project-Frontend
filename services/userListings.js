app.factory('UserListings', function($http, $q, $rootScope) {
  var urlBase = 'data/userListings.json';
  var listings = [];
  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        if (data.length != listings.length){
          for (listing in data) {
            listings.push(data[listing]);
          }
        }
        
      }).error(function(err){
        console.log("Listing data not found: " + err + data);
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
    }
  };
});
