app.controller('CommentsListingsCtrl',function($scope, $interval, $rootScope, $state, $timeout, CommentsListings, Auth, comment, listing) {

  //messages coming from other controllers
  $scope.loggedUser = Auth.userInfo.loggedUser

  $scope.comments = comments
  console.log($scope.comments)

  CommentsListings.update($scope.loggedUser)
  console.log("Auth.userinfo in mylistings is...", Auth.userInfo.loggedUser)

  $scope.orderByField = 'expires_at';
  $scope.reverseSort = false;

  //UserListings.update();

  UserListings.update($scope.loggedUser);
  $scope.listings = UserListings.all();
  // $timeout(function(){
  //  console.log($scope.listings)
  // },1000)
  setTimeout(function(){
    console.log($scope.listings)
  },1000)
  $scope.countDown = function(timeEnd) {
    return Timer.countdown(timeEnd);
  }

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
    if (days > 1){
      return days + " days ";
    } else if (days < 1  && hours > 0) {
      return hours + " hrs " + minutes + " minutes " + seconds + " s";
    } else if (hours < 1 && minutes > 1){
      return minutes + " minutes " + seconds + " s";
    }
    else if (minutes < 1){
      return seconds + " seconds ";
    }