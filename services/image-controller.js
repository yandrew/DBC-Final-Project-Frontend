
app.controller('ImageCtrl',['$scope', function($scope) {



  // $scope.sizeLimit      = 10585760; // 10MB in Bytes
  // $scope.uploadProgress = 0;
  // $scope.creds          = {};
  // debugger
  // $scope.upload = function() {
  //   AWS.config.region = 'us-east-1';
  //   console.log('what is this', AWS.config.update)
  //   AWS.config.update({
  //     credentials: new AWS.CognitoIdentityCredentials({
  //         AccountId: '441413730620',
  //         RoleArn: 'arn:aws:iam::441413730620:role/Cognito_sellmeUnauth_DefaultRole',
  //         IdentityPoolId: 'us-east-1:514d2425-42bc-4d7b-84f7-ad536a24d2a3'
  //     })
  //   });

  //   var bucket = new AWS.S3({ params: { Bucket: "sellme" } });
  //   debugger
  //   if($scope.file) {
  //       var fileSize = Math.round(parseInt($scope.file.size));
  //       if (fileSize > 5292880) {
  //         console.log('Error, File Size too large')
  //         return false;
  //       }
  //       // Unique String Generator
  //       var uniqueFileName = $scope.uniqueString() + '-' + $scope.file.name;
  //       debugger
  //       $scope.picPath = uniqueFileName
  //       var params = { Key: 'public/'+ uniqueFileName, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };
  //       console.log(params.Key)
  //       bucket.putObject(params, function(err, data) {
  //         if(err) {
  //           // toastr.error(err.message,err.code);
  //           console.log('error in if of bucket')
  //           return false;
  //         }
  //         else {
  //           // Upload Successfully Finished
  //           toastr.success('File Uploaded Successfully', 'Done');
  //           console.log("finished uploading")
  //           console.log("this is working", $scope.picsUrl = ("https://s3-us-west-1.amazonaws.com/sellme/public/" + $scope.picPath))
  //           // Reset The Progress Bar
  //           setTimeout(function() {
  //             $scope.uploadProgress = 0;
  //             $scope.$digest();
  //           }, 4000);
  //         }
  //       })
  //       .on('httpUploadProgress',function(progress) {
  //         $scope.uploadProgress = Math.round(progress.loaded / progress.total * 100);
  //         console.log('uploading')
  //         $scope.$digest();
  //       })
  //     }
  //     else {
  //       // No File Selected
  //       // toastr.error('Please select a file to upload');
  //     }
  //   }
  // $scope.uniqueString = function() {
  //   var text     = "";
  //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   for( var i=0; i < 8; i++ ) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //   return text;
  // }
}]);