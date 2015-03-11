app.controller('NewUserCtrl', function($scope, User, Auth) {

	$scope.newUser = {};

	$scope.makeUser = function() {
		User.postNew($scope.newUser)
		.then(function(res){
			console.log("post made", res)
		}, function(err) {
			console.log("post failed", err)
		});
		console.log($scope.newUser)
		Auth.authenticate({
			username: $scope.newUser.username,
			password: $scope.newUser.password
		})
		$scope.newUser = {};
    console.log("let's make this new user")
    $rootScope.message = "Your profile has been created. Please log in.";
    $state.transitionTo('main.login')
	}

})

  // t.string :username
  // t.string :password_hash
  // t.string :name
  // t.string :email
  // t.text :avatar
  // t.text :bio
  // t.integer :rating