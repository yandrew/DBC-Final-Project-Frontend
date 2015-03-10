app.controller('NewUserCtrl', function($scope,  User) {

	$scope.newUser = {};

	$scope.makeUser = function() {
		User.postNew($scope.newUser)
		.then(function(res){
			console.log("post made", res)
		}, function(err) {
			console.log("post failed", err)
		});
		$scope.newUser = {};
	}

})


  // t.string :username
  // t.string :password_hash
  // t.string :name
  // t.string :email
  // t.text :avatar
  // t.text :bio
  // t.integer :rating