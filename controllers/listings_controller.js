app.controller('ListingsCtrl', function($scope, $interval, ModalService, Listing, User, Product, Offer, $modal, $log) {

  // $scope.datetime = 1425695731013;
  // $interval(function(){
  //   $scope.datetime = $scope.datetime - 1000
  // }, 1000)

  $scope.listings = Listing.all();


});
