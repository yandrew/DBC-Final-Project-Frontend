app.controller('OffersCtrl', function($scope, $timeout, $state, $stateParams, $rootScope, $state, Listing, Offer, listing, Auth){

  $scope.loggedUser = Auth.userInfo.loggedUser

  $scope.listing = listing.data
  $scope.offers = $scope.listing.offers
  console.log('this is the listing', $scope.listing)
  console.log('these are the offers', $scope.offers)