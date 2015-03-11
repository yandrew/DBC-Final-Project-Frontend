app.service('CategoryService',function($http) {
	var urlBase = 'http://localhost:3000/'
  this.categories = [];
  this.getCategories = function() {
    var that = this;
    return $http.get(urlBase + 'categories')
  }

})