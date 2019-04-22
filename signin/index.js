angular.module("app").controller("SignInController", function($scope, $window, authService) {
    $scope.loginUser = login;
    $scope.registerUser = register;

    function login($scope) {
        console.log('Tentativa de login do usuário ' + $scope.user.username);
        authService.signin($scope)
        .then(function () {
            $window.location.href = "/home";
        })
        .catch(function (err) {
            alert(err);
        });
    }
    function register() {
        console.log('Vai criar usuário');
        $window.location.href = "/register";
    }
});