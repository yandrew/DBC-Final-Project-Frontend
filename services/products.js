app.factory('Products', function($http, $q) {
  var urlBase = 'data/products.json';
  var products = [];
  return {
    update: function() {
      var defer = $q.defer();
      $http.get(urlBase).success(function(data){
        products = data;
        defer.resolve();
      }).error(function(err){
        console.log("Products data not found: " + err)
      })
      return defer.promise
    },
    all: function() {
      return products
    },
    add: function(product) {
      products.push(product)
    },
    remove: function(product) {
      products.splice(products.indexof(product), 1)
    }
  }
})
