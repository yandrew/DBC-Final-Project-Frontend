<<<<<<< HEAD
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
=======
app.factory('Listing', function($http, $q, $rootScope, $firebaseArray, $firebaseObject) {
  var urlBase = 'data/listings.json';
  var ref = new Firebase("https://sell-me.firebaseio.com/listings")
  $firebaseObject(ref).$remove();
  var listings = $firebaseArray(ref);

  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        for (item in data) {
          listings.$add(data[item])
        }
      }).error(function(err){
        console.log("Listings data not found: " + err)
      })
    },
    all: function() {
      return listings
    },
    add: function(listing) {
      listings.$add(listing)
    },
    remove: function(listing) {
      listings.$remove(listings.indexof(listing))
    },
    findById: function(listingId) {
      var listingFound;
      listings.forEach(function(elem){
        if (elem.id === listingId) {
          console.log('HERE', elem)
          listingFound = elem;
        }
      })
      return listingFound;
    }
  }
})
>>>>>>> refactored factories to reflect only the necessary data model
