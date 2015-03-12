app.service('Timer',function() {
	this.countdown = function(startDate) {
		
		var ending = new Date(startDate).getTime();
  	var timeNow = new Date().getTime();
  	var differ = ending - timeNow;
    //console.log(Date(differ))
  	// console.log(differ);
  	if (differ < 0){
  		return "expired!";
  	}

   	var _second = 1000;
   	var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;

   	var days = Math.floor(differ / _day);
		var hours = Math.floor((differ % _day) /_hour);
		var minutes = Math.floor((differ % _hour)/ _minute);
		var seconds = Math.floor((differ % _minute)/(_second));
    // console.log('days', days)
    // console.log('hours', hours)
    // console.log('minutes', minutes)
    // console.log('seconds', seconds)

    // return days + " days " + hours + " hrs " + minutes + " minutes " + seconds + " s"
   	
   	if (days > 1){
   		return days + " days ";
   	
   	} else if (days == 1  && hours >= 6) {
   		return days + " day " +hours + " hrs ";
   	
   	} else if (days == 1  && hours < 6) {
      return days + " day " + hours + " hrs " + minutes + " minutes " + seconds + " s";
    
    } else if (days < 1 && hours >= 1 ){
      return hours + " hrs " + minutes + " minutes " + seconds + " s";
      console.log("we are in the timer", hours)
    } else if (hours < 1 && minutes >= 1){
   		return minutes + " minutes " + seconds + " s";
   	
   	} else if (minutes < 1){
   		return seconds + " seconds ";
   	}
	}

})

