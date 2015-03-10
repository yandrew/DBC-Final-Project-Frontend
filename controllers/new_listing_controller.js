app.controller('NewListingCtrl', function($scope, Listing, CategoryService) {

	CategoryService.getCategories().then(function(res){
		$scope.categories = res.data;
	})
	
	$scope.newListing = {};
	$scope.currentDate = new Date();
	console.log($scope.categories);
	$scope.makeListing = function() {
		$scope.newListing.user_id = 2;
		$scope.newListing.category_id = $scope.newListing.category_id['id']
		Listing.postNew($scope.newListing)
		.then(function(res){
			console.log("post made", res)
		}, function(err) {
			console.log("post failed", err)
		});
		$scope.newListing = {};
	}

})
