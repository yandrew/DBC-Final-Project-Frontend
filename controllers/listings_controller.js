app.controller('ListingsCtrl', function($scope, $interval, ModalService, Listing, User, Product, Offer, $modal, $log) {

	console.log('in listings controller')
  $scope.datetime = 1425695731013;
  $interval(function(){
    $scope.datetime = $scope.datetime - 1000
  }, 1000)

  $scope.listings = Listing.all();

  //Open modal window to log in
  // $scope.open = function (size)
  this.modalUpdate = function(){

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});
