app.service('CategoryService',function($http, apiService) {
	var urlBase = apiService.urlBase;
  this.categories = [];
  this.getCategories = function() {
    var that = this;
    return $http.get(urlBase + '/categories')
  }

})