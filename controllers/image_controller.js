app.controller('ImageCtrl', function($scope, $rootScope, $timeout) {
var picsUrl = [];

console.log('im in image controller')

  $scope.complete = true

  $scope.uploadtrue = "Upload"

  $scope.upload = function() {
  	console.log('uploading in image controller')
  	$scope.uploaded = true
  	$timeout(function(){
  		$scope.uploaded = false
  	},10000)
    AWS.config.region = 'us-east-1';
    AWS.config.update({
      credentials: new AWS.CognitoIdentityCredentials({
          AccountId: '441413730620',
          RoleArn: 'arn:aws:iam::441413730620:role/Cognito_sellmeUnauth_DefaultRole',
          IdentityPoolId: 'us-east-1:514d2425-42bc-4d7b-84f7-ad536a24d2a3'
      })
    });

    var bucket = new AWS.S3({ params: { Bucket: "sellme" } });
    
    if($scope.file) {
        var fileSize = Math.round(parseInt($scope.file.size));
        if (fileSize > 5292880) {
          $scope.complete = false;
          $scope.uploadtrue = "Upload Failed, 5MB Max"
          return false;
        }
        // Unique String Generator
        var uniqueFileName = $scope.uniqueString() + '-' + $scope.file.name;
        $scope.picPath = uniqueFileName
        $rootScope.avatar = "https://s3-us-west-1.amazonaws.com/sellme/public/" + uniqueFileName
        var params = { Key: 'public/'+ uniqueFileName, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };

        bucket.putObject(params, function(err, data) {
          if(err) {
            return false;
          }
          else {
            // Upload Successfully Finished
            // Reset The Progress Bar
            setTimeout(function() {
              $scope.uploadProgress = 0;
              $scope.$digest();
            }, 4000);
          }
        })
        .on('httpUploadProgress',function(progress) {
          if (progress.loaded == progress.total){
            $scope.complete = true;
            $scope.uploadtrue = "Upload Successfull"
            $scope.$digest();
          }  
        })
      }
      else {
      }
    }
  $scope.uniqueString = function() {
    var text     = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

});