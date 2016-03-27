(function(angular) {
  'use strict';
angular.module('register', ['Ajaxhelper'])
  .controller('RegisterController', ['$scope','ajax','$window', function($scope, ajax, $window) {
    $scope.username = "";
    $scope.password = "";
    var method = 'POST';
    var api = 'register';
    $scope.register = function() {
      var request = new Object();
      request.username = $scope.username;
      request.password = $scope.password;
      console.log(request);
      ajax.getdata(method, api, request).then(function(response){
        $window.alert(response.data.status);
    });
    };
  }]);
})(window.angular);
