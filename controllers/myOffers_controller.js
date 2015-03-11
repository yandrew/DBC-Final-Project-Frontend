app.controller('MyOffersCtrl', function($scope, $interval, Offer, $stateParams, Timer, Auth, UserOffers) {

  $scope.loggedUser = Auth.userInfo.loggedUser
  UserOffers.update($scope.loggedUser)
  console.log("Auth.userinfo in myOffersCtrl is...", Auth.userInfo.loggedUser)

  $scope.offers = UserOffers.all();


  // Offer.update($stateParams.user_id);
  // $scope.offers = Offer.all();
  $scope.countDown = function(timeEnd) {
    return Timer.countdown(timeEnd);
  };

});
