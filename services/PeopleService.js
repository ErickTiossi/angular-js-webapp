angular.module('app', [])
  .factory('peopleService', PeopleService);

function PeopleService ($http, $window, $q) {
  return {
    getToken : function () {
      var token =  $window.localStorage.getItem("token");
      if (token === null)
        token = "undefined";
      return token;
    },
    list : function () {
      var token =  $window.localStorage.getItem("token");
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      return $http.get('https://nodejs-api-mongo.azurewebsites.net/api/pessoas/').then(handleSuccess, handleError);
    }
  };

  function handleSuccess(res) {
    return res.data;
  }

  function handleError(res) {
    return $q.reject(res.data);
  }
}