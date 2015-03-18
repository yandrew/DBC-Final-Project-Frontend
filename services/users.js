app.factory('User', function($http, $q, $rootScope) {
  var urlBase = 'http://sellme.herokuapp.com';
  var users = [];

  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        for (item in data) {
          users.push(data[item])
        }
      }).error(function(err){
        console.log("users data not found: " + err)
      })
    },
    all: function() {
      return users
    },
    add: function(user) {
      users.push(user)
    },
    remove: function(userId) {
      $http.delete(urlBase + '/users/' + userId)
    },
    findById: function(userId) {
      var userFound;
      users.forEach(function(elem){
        if (elem.id === userId) {
          console.log('HERE', elem)
          userFound = elem;
        }
      })
      return userFound;
    },
    getById: function(userId) {
      return $http.get(urlBase + '/users/' +  userId)
    },
    postNew: function(params) {
      return $http.post('http://sellme.herokuapp.com/users/', params)
    }
  }
})
