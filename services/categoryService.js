app.service('CategoryService',function($http) {
	var urlBase = 'http://sellme.herokuapp.com'
  this.categories = [];
  this.getCategories = function() {
    var that = this;
    return $http.get(urlBase + '/categories')
  }

})