app.factory('User', function($http, $q, $rootScope, $firebaseArray, $firebaseObject) {
  var urlBase = 'data/users.json';
  var ref = new Firebase("https://sell-me.firebaseio.com/users")
  $firebaseObject(ref).$remove();
  var users = $firebaseArray(ref);

  return {
    update: function() {
      $http.get(urlBase).success(function(data){
        for (item in data) {
          users.$add(data[item])
        }
      }).error(function(err){
        console.log("users data not found: " + err)
      })
    },
    all: function() {
      return users
    },
    add: function(user) {
      users.$add(user)
    },
    remove: function(user) {
      users.$remove(users.indexof(user))
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
    }
  }
})
