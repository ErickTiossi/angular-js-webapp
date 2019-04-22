angular.module('app').controller("IndexController", function($rootScope, $window, authService) {
    if (authService.getToken() === "undefined") {
        $rootScope.$evalAsync(function () {
            $window.location.href = "/signin";
        })
    }
});