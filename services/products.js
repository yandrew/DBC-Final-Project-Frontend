app.factory('Product', function($http, $q, $rootScope) {
  var urlBase = 'data/products.json';
  var products = [];

  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        for (item in data) {
          products.push(data[item])
        }
      }).error(function(err){
        console.log("products data not found: " + err)
      })
    },
    all: function() {
      return products
    },
    add: function(product) {
      products.push(product)
    },
    remove: function(product) {
      products.splice(products.indexof(product), 1)
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
