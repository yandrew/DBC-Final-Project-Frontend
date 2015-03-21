app.factory('UserOffers', function($http, $q, $rootScope) {
  var urlBase = 'http://sellme.herokuapp.com';
  var offers = [];
  return {
    update: function(user_id) {
      console.log("User ID in useroffers services is...", user_id)
      $http.get(urlBase + "/users/" + user_id + "/offers").success(function(data){
        while (offers.length > 0) {
          offers.pop();
        }
        if (data.length != offers.length){
          for (var offer in data) {
            offers.push(data[offer]);
          }
          console.log("In UserOffers, offers array is:  ", offers)
        }
        console.log('offers for user ' + user_id + ' retrieved')
      }).error(function(err){
        console.log("offer data not found: " );
      });
    },
    all: function() {
      return offers;
    },
    add: function(offer) {
      offers.push(offer);
    },
    remove: function(offer) {
      offers.splice(offers.indexof(offer), 1);
    }
  };
});
