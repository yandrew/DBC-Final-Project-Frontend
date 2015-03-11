app.controller('ListingCtrl', function($scope, $stateParams, Offer, $timeout, $state, $rootScope, Listing, listing){

	// listing.then(function(res){
	// 	$scope.listing = res.data
	// 	console.log("From within ListingCtrl, res.data is ", res.data)
	// });
	$scope.listing = listing.data
	$scope.offers = $scope.listing.offers
	console.log("listing is this: ", $scope.listing)
	console.log("offers are this: ", $scope.offers)

	$scope.deleteListing = function(){
		var answer = confirm("Are you sure you want to delete this listing?")
		if (answer) {		
			Listing.remove($scope.listing.listing_id);
			$state.transitionTo('main.mylistings')
			$rootScope.message = "Your listing was successfully deleted"
		}
	}

	$scope.acceptOffer = function(offer_id, index){
		Offer.accept(offer_id);
		$scope.message = "Congratulations on your purchase! This listing has been closed. You will receive the seller's contact information in your email in the next 5 minutes. Please contact him to close the deal."
		$timeout(function(){
			$scope.message = false
		},10000)
		$scope.listing.closed = true;
	}

	$scope.invalidateOffer = function(offer_id, index){
		Offer.invalidate(offer_id);
		$scope.offers.splice(index, 1)
		$scope.message = "The offer has been marked invalid. You will not see it again"
		$timeout(function(){
			$scope.message = false
		},3000)
	}

	console.log('listing to debug', $scope.listing)

})