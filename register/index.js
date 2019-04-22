angular.module("app").controller("RegisterController", function($scope,$window,userService) {
    $scope.saveUser = save;

    function save($scope) {
        console.log('Tentativa de salvar o usuário ' + $scope.user.username);
        userService.register($scope.user)
            .then(function () {
                $window.location.href = "/signin";
            })
            .catch(function (err) {
                alert(err);
            });
    }
});