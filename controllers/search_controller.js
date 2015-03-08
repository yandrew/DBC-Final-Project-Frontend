app.controller('SearchCtrl', function($scope, $interval, Listings) {

  $scope.datetime = 1425695731013;
  $interval(function(){
    $scope.datetime = $scope.datetime - 1000
  }, 1000)

  $scope.listings = Listings.all();
  Listings.update();



})
