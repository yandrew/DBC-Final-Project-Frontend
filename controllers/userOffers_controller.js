app.controller('UserOffersCtrl', function($scope, $interval, Offers, $stateParams) {

  $scope.offers = Offers.all();
  Offers.update($stateParams.user_id);



})
