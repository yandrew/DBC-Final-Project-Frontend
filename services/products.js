app.factory('Product', function($http, $q, $rootScope, $firebaseArray, $firebaseObject) {
  var urlBase = 'data/products.json';
  var ref = new Firebase("https://sell-me.firebaseio.com/products")
  $firebaseObject(ref).$remove();  
  var products = $firebaseArray(ref);

  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        for (item in data) {
          products.$add(data[item])
        }
      }).error(function(err){
        console.log("products data not found: " + err)
      })
    },
    all: function() {
      return products
    },
    add: function(product) {
      products.$add(product)
    },
    remove: function(product) {
      products.$remove(products.indexof(product))
    },
    findById: function(productId) {
      var productFound;
      products.forEach(function(elem){
        if (elem.id === productId) {
          console.log('HERE', elem)
          productFound = elem;
        }
      })
      return productFound;
    }
  }
})
