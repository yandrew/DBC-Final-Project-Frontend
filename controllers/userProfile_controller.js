app.controller('UserProfileCtrl', function($scope, $interval, Products) {

  $scope.datetime = 1425695731013;
  $interval(function(){
    $scope.datetime = $scope.datetime - 1000
  }, 1000)

  $scope.products = Products.all();
  Products.update();



})

