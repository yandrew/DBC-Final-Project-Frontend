app.factory('Offer', function($http, apiService, $q, $rootScope) {

  var urlBase = apiService.urlBase;
  var offers = [];

  return {
    update: function(user_id) {
      // console.log(user_id)
      $http.get(urlBase + '/users/'+ user_id + '/offers').success(function(data){
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
    remove: function(offer) {
      offers.splice(offers.indexof(offer), 1)
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
    },
    getOffers: function(listingId) {
      return $http.get(urlBase + '/listings/' + listingId)
    },
    postOffer: function(listingId, params) {
      return $http.post(urlBase + '/listings/' + listingId + '/offers', params)
    },
    accept: function(offer_id){
      $http.post(urlBase + '/offers/accept', {offer_id: offer_id})
    }, 
    invalidate: function(offer_id){
      $http.post(urlBase + '/offers/invalidate', {offer_id: offer_id})
    }
  }
})

