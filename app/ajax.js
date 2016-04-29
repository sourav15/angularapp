(function(angular) {
  'use strict';
angular.module('Ajaxhelper', [])
  .factory('ajax', ['$http', function($http) {
   return { 
       getdata: function(method, api, request, callback) {
      var link = "http://127.0.0.1:3000/api/public/";
      var url = link.concat(api);
      var req;
      if(method === "GET") {
          req = {
           method: 'GET',
           datatype: 'json',
           url: url,
           headers: {
               'Content-Type': 'application/json'
            }
          }  
          } else if(method === "POST") {
            req = {
            method: 'POST',
            dataType: 'json',
            url: url,
            headers: {
               'Content-Type': 'application/json'
            },
            data: request
          }
      }
      
      $http(req).then(function successcallback(response){
       callback(response.data);
      },
      function errorcallback(response){
       callback(null);
      });
     }
    };
  }]);
})(window.angular);
