app.factory('UserListings', function($http, $q, $rootScope) {
  var urlBase = 'http://192.168.1.69:3000';
  var listings = [];
  return {
    update: function(user_id) {
      console.log("User ID in userlistings services is...", user_id)
      $http.get(urlBase + "/users/" + user_id + "/listings").success(function(data){
        while (listings.length > 0) {
          listings.pop();
        }
        if (data.length != listings.length){
          for (var listing in data) {
            listings.push(data[listing]);
          }
        }
        console.log('Listings for user ' + user_id + ' retrieved')
      }).error(function(err){
        console.log("Listing data not found: " );
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
