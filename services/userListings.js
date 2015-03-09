app.factory('UserListings', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000';
  var listings = [];
  return {
    update: function(user_id) {
      $http.get(urlBase + "/user/" + 6 + "/listings").success(function(data){
        if (data.length != listings.length){
          for (var listing in data) {
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
