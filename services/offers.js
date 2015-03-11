app.factory('Offer', function($http, $q, $rootScope) {

  var urlBase = 'http://192.168.1.69:3000';
  var offers = [];

  return {
    update: function(user_id) {
      // console.log(user_id)
      $http.get(urlBase + '/users/'+ user_id + '/offers').success(function(data){
        while (offers.length > 0) {
          offers.pop();
        }
        if (data.length != offers.length){
          for (var item in data) {
            offers.push(data[item]);
          }
        }
      console.log(offers);
      }).error(function(){
        console.log("Offers data not found: ");
      })
    },
    all: function() {
      return offers
    },
    add: function(offer) {
      offers.push(offer)
    },
    remove: function(offerId, userId) {
      $http.delete(urlBase + '/offers/' + offerId).success(function(){
        console.log("offer was deleted in")
        offers.forEach(function(elem, index){
          console.log(elem.id)
          console.log(offerId)
          if (elem.id === offerId)
            console.log("removing element")
            offers.splice(index, 1)
        });
      })
    },
    findById: function(offerId) {
      return $http.get(urlBase + '/offers/' + offerId)
    },
    getOffers: function(listingId) {
      return $http.get('http://192.168.1.69:3000/listings/' + listingId)
    },
    postOffer: function(params) {
      console.log("in offers.js here are params: ", params)
      return $http.post('http://192.168.1.69:3000/offers', params)
    },
    accept: function(offer_id){
      $http.post(urlBase + '/offers/accept', {offer_id: offer_id})
    },
    invalidate: function(offer_id){
      $http.post(urlBase + '/offers/invalidate', {offer_id: offer_id})
    }
  }
})

