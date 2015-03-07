app.controller('SearchCtrl', function($scope, Products) {

  $scope.products = Products.all();
  Products.update()

})
