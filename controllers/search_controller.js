app.controller('SearchCtrl', function($scope, Products) {

  Products.update().then(function(){
    $scope.products = Products.all();
  })

  setTimeout(function() {
    Product.add({
      "name": "fridge",
      "image_url": "https://www.fisherpaykel.com/vault/images/prod_mugshots/Refrigerators/E522BRX2_EXTERIOR_MUG_mug.JPG"
    });
    console.log($scope.products)
  })

})
