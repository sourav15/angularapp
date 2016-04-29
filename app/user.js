(function(angular) {
  'use strict';
angular.module('register', ['Ajaxhelper'])
  .controller('RegisterController', ['$scope','ajax','$window', function($scope, ajax, $window) {
    $scope.username = "";
    $scope.password = "";
    $scope.register = function() {
      var method = 'POST';
      var api = 'register';
      var request = new Object();
      request.username = $scope.username;
      request.password = $scope.password;
      console.log(request);
      ajax.getdata(method, api, request, function(data){
        $window.alert(data.status);
    });
    };

    $scope.login = function() {
      var method = 'POST';
      var api = 'login';
      var request = new Object();
      request.username = $scope.username;
      request.password = $scope.password;
      console.log(request);
     // ajax.getdata(method, api, request).then(function(response){
     //   $window.alert(response.data.status);
     ajax.getdata(method, api, request, function(data){
     if(data == null) {
        $window.alert("Network Error");
     } else {
       $window.alert(data.status);
     } 
     });
   // });
    };
  }]);
})(window.angular);
