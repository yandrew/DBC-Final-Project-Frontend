app.controller('OfferCtrl', function($scope, $timeout, $state, $stateParams, Listing, Offer, listing){

	$scope.listing = listing
	$timeout(function(){
		if (!$scope.listing)
			$scope.listing = Listing.findById($stateParams.listingId);
			$scope.newOffer.productPrice = $scope.listing.current_price;
	}, 20)

	$scope.offers = Offer.all();
	$scope.newOffer = {}
	if (listing) $scope.newOffer.productPrice = listing.current_price

	$scope.makeOffer = function() {
		Offer.add($scope.newOffer)
		$scope.message = "Your offer has been made"
		$timeout(function(){
			$scope.message = "";
		}, 2000)
		$scope.newOffer = {};
		console.log(Offer.all());
	}

})