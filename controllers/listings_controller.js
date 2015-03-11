app.controller('ListingsCtrl', function($scope, $interval, $modal, Listing, User, Product, Offer, Auth) {


  // Auth.authenticate({
  //   username: 'GAAEXESW',
  //   password: '123'
  // });

	console.log('in listings controller')
  $scope.datetime = 1425695731013;
  $interval(function(){
    $scope.datetime = $scope.datetime - 1000
  }, 1000)

  $scope.listings = Listing.all();

  $scope.userInfo = Auth.userInfo;

})
