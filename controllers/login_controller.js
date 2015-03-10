app.controller('LoginCtrl', function($scope, Auth){

	$scope.userlogin = {};
	$scope.login = function(){
		console.log($scope.userlogin)
		Auth.authenticate($scope.userlogin);
		$scope.userlogin = {};
	}

})

//test
//test