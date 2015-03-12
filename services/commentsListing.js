app.factory('CommentListings', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000';
  var comments = [];
  console.log('in comment service')return {
    update: function(listing_id) {
      $http.get(urlBase + '/comments/listing/' + listing_id).success(function(data){
        while (comments.length > 0) {
          comments.pop();
        }
        for (item in data) {
          comments.push(data[item])
        }
        console.log('Listings retrieved')
      }).error(function(err){
        console.log("Listings data not found: ")
      })
    },
    all: function() {
      if (comments === []) this.update()
      return comments
    },
    postNew: function(params){
      return $http.post(urlBase + '/comments', params)
    },
    retrieve: function(listing_id){
      return $http.get(urlBase + '/comments/listing/' + listing_id)
    }
  }
})