app.controller('CommentsOffersCtrl',function($scope, $interval, $rootScope, $state, $timeout, CommentsOffers, Auth, comment, offer) {

  //messages coming from other controllers
  $scope.loggedUser = Auth.userInfo.loggedUser

  $scope.comments = comments
  console.log($scope.comments)

  Commentsoffers.update($scope.loggedUser)
  console.log("Auth.userinfo in myoffers is...", Auth.userInfo.loggedUser)

  $scope.orderByField = 'expires_at';
  $scope.reverseSort = false;

  //Useroffers.update();

  Useroffers.update($scope.loggedUser);
  $scope.offers = Useroffers.all();
  // $timeout(function(){
  //  console.log($scope.offers)
  // },1000)
  setTimeout(function(){
    console.log($scope.offers)
  },1000)
