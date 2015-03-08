<<<<<<< HEAD
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

=======
app.factory('Offer', function($http, $q, $rootScope, $firebaseArray, $firebaseObject) {
  var urlBase = 'data/offers.json';
  var ref = new Firebase("https://sell-me.firebaseio.com/offers")
  $firebaseObject(ref).$remove();  
  var offers = $firebaseArray(ref);

  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        for (item in data) {
          offers.$add(data[item])
        }
      }).error(function(err){
        console.log("offers data not found: " + err)
      })
    },
    all: function() {
      return offers
    },
    add: function(offer) {
      offers.$add(offer)
    },
    remove: function(offer) {
      offers.$remove(offers.indexof(offer))
    },
    findById: function(offerId) {
      var offerFound;
      offers.forEach(function(elem){
        if (elem.id === offerId) {
          console.log('HERE', elem)
          offerFound = elem;
        }
      })
      return offerFound;
    }
  }
})
>>>>>>> refactored factories to reflect only the necessary data model
