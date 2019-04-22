angular.module('app', [])
  .factory('userService', UserService);

function UserService ($http, $window, $q) {
  return {
    register : function (data) {
      return $http.post('https://nodejs-api-mongo.azurewebsites.net/api/users/register', data).then(handleSuccess, handleError);
    }
  };

  function handleSuccess(res) {
    return res.data;
  }

  function handleError(res) {
    return $q.reject(res.data);
  }
}