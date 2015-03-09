app.controller('NewListingCtrl', function($scope, Listing) {

	$scope.newListing = {};

	$scope.makeListing = function() {
		$scope.newListing.user_id = 1;
		Listing.postNew($scope.newListing)
		.then(function(res){
			console.log("post made", res)
		}, function(err) {
			console.log("post failed", err)
		});
		$scope.newListing = {};
	}

})
