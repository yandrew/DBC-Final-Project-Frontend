app.service('Auth', function($cookieStore, $http, $state, $rootScope) {

  var urlBase = 'http://192.168.1.69:3000';

  this.userInfo = {};
  var self = this;

	this.authenticate = function(params) {
		$http.post( urlBase + '/users/login', params).success(function(data){
			$cookieStore.put('userid', data.id);
			$rootScope.$broadcast('userloggedinevent');
			$state.transitionTo('main.profile');
		}).error(function(data){
			console.log('unable to login')
			$cookieStore.remove('userid')
		})
	}

	this.logout = function() {
		$rootScope.$broadcast('userloggedoutevent');
		$state.transitionTo('main.listings')
		$cookieStore.remove('userid');
		delete self.userInfo.userId;
		console.log('loggedOut in Auth service')
	}

	this.authorize = function() {
		console.log ('cookie', $cookieStore.get('userid'))
		this.userInfo['loggedUser'] = $cookieStore.get('userid')
		// if (!$cookieStore.get('userid')) $scope.transitionTo('main.login')
		return $cookieStore.get('userid')
	}

})