angular.module('app', [])
  .factory('authService', AuthService);

function AuthService ($http, $window, $q) {
  return {
    getToken : function () {
      var token =  $window.localStorage.getItem("token");
      if (token === null)
        token = "undefined";
      return token;
    },
    signin : function (data) {
      return $http.post('https://nodejs-api-mongo.azurewebsites.net/api/users/authenticate', data.user)
        .then(function (signInData) {
          if (signInData) {
            $window.localStorage.setItem("userId",signInData.data.userId);
            $window.localStorage.setItem("token",signInData.data.token);
            return handleSuccess(signInData);
          } else {
            return false;
          }
        })
        .catch(function (err) {
          return handleError(err);
        });
    },
    logOut : function () {
      $window.localStorage.clear();
    },
    getUser : function (data) {
      var request = {};
      request.userId = $window.localStorage.getItem("userId");
      var token =  $window.localStorage.getItem("token");
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      return $http.post('https://nodejs-api-mongo.azurewebsites.net/api/users/current', request)
        .then(handleSuccess, handleError);
    }
  };

  function handleSuccess(res) {
    return res.data;
  }

  function handleError(res) {
    return $q.reject(res.data);
  }
}