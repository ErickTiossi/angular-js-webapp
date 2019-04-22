angular.module('app').controller("PeopleController", 
    function($rootScope, $scope, $window, peopleService) {
    if (peopleService.getToken() === "undefined") {
        $rootScope.$evalAsync(function () {
            $window.location.href = "/signin";
        })
    } else {
        peopleService.list()
            .then(function(resultado){
                $scope.list = resultado;
            });
    }

    $scope.sair = sair;
    function sair() {
        $window.location.href = "/home";
    }
});



