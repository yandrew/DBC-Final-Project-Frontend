app.controller('MyOffersCtrl', function($scope, $interval, Offer, $stateParams, $rootScope, $timeout, Timer, Auth, UserOffers) {

	$scope.message = $rootScope.message
	$rootScope.message = false

	$timeout(function(){
		$scope.message = false
	},10000)

  $scope.loggedUser = Auth.userInfo.loggedUser
  UserOffers.update($scope.loggedUser)
  console.log("Auth.userinfo in myOffersCtrl is...", Auth.userInfo.loggedUser)

  $scope.offers = UserOffers.all();

  // Offer.update($stateParams.user_id);
  // $scope.offers = Offer.all();
  $scope.countDown = function(timeEnd) {
    return Timer.countdown(timeEnd);
  };

  $scope.deleteOffer = function(offerId){
  	Offer.remove(offerId, $scope.loggedUser)
    $rootScope.digest();
  }

});
