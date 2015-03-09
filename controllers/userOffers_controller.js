
app.controller('UserOffersCtrl', function($scope, $interval, Offer, $stateParams, Timer) {

  Offer.update($stateParams.user_id);
  $scope.offers = Offer.all();
  $scope.countDown = function(timeEnd) {
    return Timer.countdown(timeEnd);
  };

});
