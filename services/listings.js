app.factory('Listings', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000';
  var listings = [];
  var userListings = [];
  return {
    update: function() {
      $http.get(urlBase + "/listings").success(function(data){
        if (data.length != listings.length){
          for (var i = 0; i < data.length; i++) {
            listings.push(data[i]);
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
    updateUserListings: function(user_id) {
      $http.get(urlBase + "/user/" + user_id + "listings").success(function(data){
        if (data.length != userListings.length){
          for (var i = 0; i < data.length; i++) {
            userListings.push(data[i]);
          }
        }
      }).error(function(err){
        console.log("Listings data not found for user: " + err);
      });
    }

  };
});
