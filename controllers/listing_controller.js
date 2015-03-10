app.controller('ListingCtrl', function($scope, $stateParams,  Offer, $timeout, Listing, listing){

	$scope.listing = listing;

	$timeout(function(){
		if (!$scope.listing)
			$scope.listing = Listing.findById($stateParams.listingId);
	}, 1000)

	Offer.getOffers($stateParams.listingId).then(function(res){
		$scope.offers = res.data.offers;
		console.log('offers', $scope.offers)
	})
	console.log('listing', listing)

	$scope.acceptOffer = function(offer_id, index){
		Offer.accept(offer_id);
		$scope.message = "Congratulations on your purchase! This listing has been closed. You will receive the contact information for the buyer in your email in the next 5 minutes. Please contact him to close the deal"
		$timeout(function(){
			$scope.message = false
		},10000)		
	}

	$scope.invalidateOffer = function(offer_id, index){
		Offer.invalidate(offer_id);
		$scope.offers.splice(index, 1)
		$scope.message = "The offer has been marked invalid. You will not see it again"
		$timeout(function(){
			$scope.message = false
		},3000)
	}

})