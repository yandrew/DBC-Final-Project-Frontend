app.service('Auth', function(apiService, $cookieStore, $http, $state, $rootScope) {

  var urlBase = apiService.urlBase;

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
		if (!$cookieStore.get('userid')) $rootScope.transitionTo('main.login')
		return $cookieStore.get('userid')
	}

})