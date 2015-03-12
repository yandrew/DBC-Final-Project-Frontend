app.factory('Comment', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000';
  console.log('in comment service')return {
    update: function() {
      $http.get(urlBase + '/comments/offer').success(function(data){
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
      return $http.get(urlBase + '/offers/' + listingId)
    },
    postNew: function(params){
      return $http.post('http://localhost:3000/listings/', params)
    }
  }
})