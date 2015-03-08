app.controller('MyListingsCtrl',function($scope, UserListings) {
  $scope.listings = UserListings.all();
	UserListings.update();
})
