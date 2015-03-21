app.controller('OffersCtrl', function($scope, $timeout, $state, $stateParams, $rootScope, $state, Listing, Offer, listing, Auth){

  $scope.loggedUser = Auth.userInfo.loggedUser

	$scope.listing = listing.data
	$scope.offers = $scope.listing.offers
	console.log('this is the listing', $scope.listing)
	console.log('these are the offers', $scope.offers)

	$timeout(function(){
		if (!$scope.listing)
			$scope.listing = Listing.findById($stateParams.listingId);
			$scope.newOffer.productPrice = $scope.listing.lowest_price;
	}, 1000)

	// Offer.getOffers($stateParams.listingId).then(function(res){
	// 	$scope.offers = res.data.offers;
	// 	console.log('offers', $scope.offers)
	// })

	console.log("Here are the listing", $scope.listing)

	$scope.newOffer = {}
	if (listing) $scope.newOffer.productPrice = listing.lowest_price

	$scope.makeOffer = function() {
		//Offer.add($scope.newOffer)

		$scope.newOffer.image_url = $rootScope.avatar;
		$rootScope.avatar = null		
		$scope.newOffer.user_id = $scope.loggedUser;

		$scope.newOffer.listing_id = $scope.listing.listing_id
		Offer.postOffer($scope.newOffer).then(function(res){
			console.log("post made", res)
		}, function(er) {
			console.log("post failed", err)
		})
		$scope.message = "Your offer has been made"
		$timeout(function(){
			$scope.message = "";
		}, 2000)
		$scope.newOffer = {};
		$state.transitionTo('main.myoffers')
		$rootScope.message = "Your offer has been made. You can track them below";

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


