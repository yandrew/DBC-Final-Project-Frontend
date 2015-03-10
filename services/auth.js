app.service('Auth', function($cookieStore, $http, $state) {

  var urlBase = 'http://192.168.1.135:3000';

  this.userInfo = {};
  var self = this;

	this.authenticate = function(params) {
		$http.post( urlBase + '/users/login', params).success(function(data){
			$cookieStore.put('userid', data.id)
		}).error(function(data){
			console.log('unable to login')			
			$cookieStore.remove('userid')
		})
	}

	this.logout = function() {
		$state.transitionTo('listings')
		$cookieStore.remove('userid');
		delete self.userInfo.userId;
		console.log('loggedOut')
	}

	this.authorize = function() {
		console.log ('cookie', $cookieStore.get('userid')) 
		return $cookieStore.get('userid')
	}

})