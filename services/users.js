app.factory('User', function($http, $q, $rootScope) {
  var urlBase = 'data/users.json';
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
    remove: function(user) {
      users.splice(users.indexof(user), 1)
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
    postNew: function(params) {
      return $http.post('http://localhost:3000/users/', params)
    }    
  }
})
