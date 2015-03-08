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
