app.factory('Offers', function($http, $q, $rootScope, $stateParams) {
  var urlBase = 'http://localhost:3000';
  var userOffers = [];
  return {
    update: function(user_id) {
      $http.get(urlBase + '/user/'+ user_id + '/offers').success(function(data){
        if (data.length != offers.length){
          for (var item in data) {
            offers.push(data[item])
          }
        }
      }).error(function(err){
        console.log("Offers data not found: " + err)
      })
    },
    all: function() {
      return offers
    },
    add: function(listing) {
      offers.push(listing)
    },
    remove: function(listing) {
      offers.splice(offers.indexof(listing), 1)
    },

  }
})
