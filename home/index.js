angular.module('app').controller("HomeController", function($rootScope,$scope, $window, authService) {
    if (authService.getToken() === "undefined") {
        $rootScope.$evalAsync(function () {
            $window.location.href = "/signin";
        })
    } else {
        authService.getUser()
            .then(function(resultado){
                $scope.user = resultado;
            });
    }

    $scope.logOut = logOut;
    $scope.pessoas = pessoas;
    function logOut() {
        console.log('Logout do usuário');
        authService.logOut();
        $window.location.href = "/signin";
    }
    
    function pessoas() {
        console.log('Logout do usuário');
        $window.location.href = "/people";
    }
});



