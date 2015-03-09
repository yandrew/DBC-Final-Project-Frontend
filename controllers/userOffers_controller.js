app.controller('UserOffersCtrl', function($scope, $interval, Offers, $stateParams) {

  Offers.update($stateParams.user_id);
  $scope.offers = Offers.all();



})
