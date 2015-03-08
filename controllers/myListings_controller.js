app.controller('MyListingsCtrl',function($scope, $interval, UserListings) {
	$scope.orderByField = 'expires_at';
  $scope.reverseSort = false;

	UserListings.update();

  $scope.listings = UserListings.all();
  // $timeout(function(){
  // 	console.log($scope.listings)
  // },1000)

  
  $scope.countdown = function(datetime) {
  	var ending = new Date(datetime).getTime();
  	var timeNow = new Date().getTime();
  	
  	// format for converting a time
  	// var newEnding = moment(ending).format('MMMM Do YYYY, h:mm:ss a')
  	
  	var differ = ending - timeNow;
  	
  	if (differ < 0){
  		return "expired!";
  	}
		// var timeNow = moment(differ).format('MMMM Do YYYY, h:mm:ss a')
  	// console.log('ending:' + ending + "now: " + now + "diff: " + diff);

   	// var days =  moment(differ).days();
   	 // var days = differ / 60 / 60 / 24;
   	 // console.log(differ);

   	var _second = 1000;
   	var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;


   	
   	// var hours =  moment(differ).hours();
   	// var minutes = moment(differ).minutes();
   	// var seconds = moment(differ).seconds();

   	var days = Math.floor(differ / _day);
		var hours = Math.floor((differ % _day) /_hour);
		var minutes = Math.floor((differ % _hour)/ _minute);
		var seconds = Math.floor((differ % _minute)/(_second));
   	
   	// return days + " days " + ;
   	if (days > 1){return days + " days "}
   	if (days < 1  && hours > 0) {
   		return hours + " hrs " + minutes + " minutes " + seconds + " s";
   	} else if (hours < 1 && minutes > 1){
   		return minutes + " minutes " + seconds + " s";
   	}
   	else if (minutes < 1){
   		return seconds + " seconds ";
   	}
   	// return days + " days " + hours + " hrs " + minutes + " minutes " + seconds + " s";


  // 	if (ending > new Date()){
		// 	var display = moment(ending).fromNow();
		// 	return display;
		
		// } else {
		// 		return "Ended!";
  // 	}
  
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


// app.controller('SearchCtrl', function($scope, $interval, Listings) {

//   $scope.datetime = 1425695731013;
//   $interval(function(){
//     $scope.datetime = $scope.datetime - 1000
//   }, 1000)

//   $scope.listings = Listings.all();
//   Listings.update();



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