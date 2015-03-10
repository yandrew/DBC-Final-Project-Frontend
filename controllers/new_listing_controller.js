app.controller('NewListingCtrl', function($scope, $timeout, Listing, CategoryService, loggedUser) {

	$scope.loggedUser = loggedUser;
	console.log('logged user in new listing ctrl', $scope.loggedUser)

	CategoryService.getCategories().then(function(res){
		$scope.categories = res.data;
	})
	
	$scope.newListing = {};
	$scope.currentDate = new Date();
	$scope.makeListing = function() {
		$scope.newListing.user_id = $scope.loggedUser;
		$scope.newListing.category_id = $scope.newListing.category_id['id']
		console.log($scope.newListing)
		Listing.postNew($scope.newListing)
		// .then(function(res){
		// 	console.log("post made", res)
		// }, function(err) {
		// 	console.log("post failed", err)
		// });
		$scope.newListing = {};
		$scope.message="Your listing has been successfully added";
		$timeout(function(){
			$scope.message = false;
		},3000)
	}


})
