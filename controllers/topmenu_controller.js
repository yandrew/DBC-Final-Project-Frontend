app.controller('TopMenuCtrl', function($scope, $rootScope, Auth){

  // 'userLogged': function(Auth){
  //   return Auth.authorize();

  $scope.userLogged = Auth.authorize();

	$scope.$on('userloggedinevent', function(){
	  $scope.userLogged = Auth.authorize();
	})  

	$scope.$on('userloggedoutevent', function(){
	  $scope.userLogged = false;
	})

	//console.log('userlogged in top menu controller', $scope.userLogged)

	$scope.logout = function() {
		Auth.logout();
	}

})