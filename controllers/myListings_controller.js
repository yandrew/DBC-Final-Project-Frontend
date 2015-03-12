app.controller('MyListingsCtrl',function($scope, $interval, $rootScope, $state, $timeout, $interval, UserListings, Timer, User, Auth) {

  //messages coming from other controllers
  $scope.message = $rootScope.message
  delete $rootScope.message

  $timeout(function(){
    $scope.message = false
  }, 10000)

  $scope.loggedUser = Auth.userInfo.loggedUser
  UserListings.update($scope.loggedUser)
  console.log("Auth.userinfo in mylistings is...", Auth.userInfo.loggedUser)

	$scope.orderByField = 'expires_at';
  $scope.reverseSort = false;

	//UserListings.update();

  UserListings.update($scope.loggedUser);
  $scope.listings = UserListings.all();
  // $timeout(function(){
  // 	console.log($scope.listings)
  // },1000)
  setTimeout(function(){
    console.log($scope.listings)
  },1000)

  setTimeout( function() {
    $scope.listings.forEach(function(listing){
      $interval(function(){
        listing.counter = Timer.countdown(listing.expires_at)
        //console.log(listing.counter)
      },1000)
    })
    console.log($scope.listings)
  },1000)

});

