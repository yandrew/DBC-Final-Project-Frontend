app.service('CategoryService',function($http) {
	var urlBase = 'http://192.168.1.135:3000/'
  this.categories = [];
  this.getCategories = function() {
    var that = this;
    return $http.get(urlBase + 'categories')
    //.success(function(data) {
      // that.categories.push(data);
      // console.log(data)
    // }).error(function() {
        // console.log("Category data not found");
    // })
  }

})
