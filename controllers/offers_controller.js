app.controller('OffersCtrl', function($scope, $timeout, $state, $stateParams, Listing, Offer, listing){

	$scope.listing = listing

	$timeout(function(){
		if (!$scope.listing)
			$scope.listing = Listing.findById($stateParams.listingId);
			$scope.newOffer.productPrice = $scope.listing.lowest_price;
	}, 1000)

	console.log($stateParams.listingId)
	Offer.getOffers($stateParams.listingId).then(function(res){
		$scope.offers = res.data[0].offers;
		console.log('offers', $scope.offers)
	})

	$scope.newOffer = {}
	if (listing) $scope.newOffer.productPrice = listing.lowest_price

	$scope.makeOffer = function() {
		//Offer.add($scope.newOffer)
		$scope.newOffer.user_id = 1;
		Offer.postOffer($scope.listing.listing_id, $scope.newOffer).then(function(res){
			console.log("post made", res)
		}, function(err) {
			console.log("post failed", err)
		})
		$scope.message = "Your offer has been made"
		$timeout(function(){
			$scope.message = "";
		}, 2000)
		$scope.newOffer = {};
	}

})


//
//user_id
//listing_id
//price
//condition
//name
//description
//image_url


