app.service('CategoryService',function($http) {
	var urlBase = 'http://192.168.1.69:3000'
  this.categories = [];
  this.getCategories = function() {
    var that = this;
    return $http.get(urlBase + '/categories')
  }

})