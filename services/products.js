app.factory('Products', function($http, $q, $rootScope) {
  var urlBase = 'data/products.json';
  var products = [];
  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        if (data.length != products.length){
          for (item in data) {
            products.push(data[item])
          }
        }
      }).error(function(err){
        console.log("Products data not found: " + err)
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
    }
  }
})
