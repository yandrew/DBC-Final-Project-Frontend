app.factory('Offers', function($http, $q, $rootScope) {
  var urlBase = 'http://localhost:3000';
  var offers = [];
  return {
    update: function(user_id) {
      // console.log(user_id)
      $http.get(urlBase + '/user/'+ user_id + '/offers').success(function(data){
        if (data.length != offers.length){
          for (var item in data) {
            offers.push(data[item]);
          }
        }
      console.log(offers);
      }).error(function(err){
        console.log("Offers data not found: " + err);
      });
    },
    all: function() {
      return offers;
    },
    add: function(listing) {
      offers.push(listing);
    },
    remove: function(listing) {
      offers.splice(offers.indexof(listing), 1);
    },

  };
});
