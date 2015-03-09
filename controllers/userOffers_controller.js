
app.controller('UserOffersCtrl', function($scope, $interval, Offers, $stateParams, Timer) {

  Offers.update($stateParams.user_id);
  $scope.offers = Offers.all();
  $scope.countDown = function(timeEnd) {
    return Timer.countdown(timeEnd);
  };

});
