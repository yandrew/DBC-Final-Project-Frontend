app.controller('MyListingsCtrl',function($scope, UserListings) {
	$scope.orderByField = 'expires_at';
  $scope.reverseSort = false;

  $scope.listings = UserListings.all();
	UserListings.update();


})
