app.controller('ProfileCtrl', function($scope, loggedUser, Auth, User){

	console.log('loggedUser', loggedUser)
	User.getById(loggedUser).then(function(res){
		console.log(res)
		$scope.user = res.data.user
	})

	$scope.deleteUser = function(){
		console.log("deleting")
		var answer = confirm("Are you sure you want to delete your account? We will miss you")
		if (answer) {
			User.remove($scope.user.id);
			console.log("delete")
			Auth.logout();
		}
	}

	$scope.logout = function() {
		Auth.logout();
	}

	$scope.now = new Date() 

})