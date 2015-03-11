app.controller('ImageCtrl', function($scope, $rootScope, $timeout) {
var picsUrl = [];

$scope.picsUrl = picsUrl;

  $scope.uploadProgress = 0;

  $scope.upload = function() {
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
          $scope.errorMSG = 'Sorry, your attachment is too big. Maximum 5MB file attachment allowed';
          $timeout(function(){
            $scope.errorMSG = null;
          }, 5000)
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
          $scope.uploadProgress = Math.round(progress.loaded / progress.total * 100);
          $scope.$digest();
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