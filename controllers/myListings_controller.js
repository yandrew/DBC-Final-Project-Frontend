app.controller('MyListingsCtrl',function($scope, $interval, UserListings) {
	$scope.orderByField = 'expires_at';
  $scope.reverseSort = false;

	UserListings.update();

  $scope.listings = UserListings.all();
  // $interval(function(){
  //   $scope.timeremaining = $scope.datetime - 1000
  // }, 1000)

  $scope.countdown = function(datetime) {
  	if (new Date(datetime) > new Date()){
			var display = moment(datetime).fromNow();
			return display;
		
		} else {
				return "Ended!";
  	}
  };


  // 		var end = new Date(datetime);
  // 		var now = new Date();

  // 		var _second = 1000;
		// 	var _minute = _second * 60;
		// 	var _hour = _minute * 60;
		// 	var _day = _hour * 24;


  // 		var timeRemaining = end - now;
  		
		// 	var days = Math.floor(distance / _day);
		// 	var hours = Math.floor((distance % _day) / _hour);
		// 	var minutes = Math.floor((distance % _hour) / _minute);
		// 	var seconds = Math.floor((distance % _minute) / _second);

  // 		return timeRemaining;
  // }


})


// app.controller('SearchCtrl', function($scope, $interval, Products) {

//   $scope.datetime = 1425695731013;
//   $interval(function(){
//     $scope.datetime = $scope.datetime - 1000
//   }, 1000)

//   $scope.products = Products.all();
//   Products.update();



// })



// CountDownTimer('2015-03-06 21:00:10 -0800', 'countdown');
//    CountDownTimer('03/20/2015 10:10 AM', 'newcountdown');

//    function CountDownTimer(datetime, id)
//    {
// 			var end = new Date(datetime);

// 			var _second = 1000;
// 			var _minute = _second * 60;
// 			var _hour = _minute * 60;
// 			var _day = _hour * 24;
// 			var timer;

// 			function showRemaining() {
// 			   var now = new Date();
// 			   var distance = end - now;
// 			   if (distance < 0) {

// 			       clearInterval(timer);

// 			       return "EXPIRED";
// 			   }
// 			   var days = Math.floor(distance / _day);
// 			   var hours = Math.floor((distance % _day) / _hour);
// 			   var minutes = Math.floor((distance % _hour) / _minute);
// 			   var seconds = Math.floor((distance % _minute) / _second);

// 			   return = days + 'days ' + hours + 'hrs ' + ;
// 			   document.getElementById(id).innerHTML += hours + 'hrs ';
// 			   document.getElementById(id).innerHTML += minutes + 'mins ';
// 			   document.getElementById(id).innerHTML += seconds + 'secs';
// 			}

// 			timer = setInterval(showRemaining, 1000);
//    }