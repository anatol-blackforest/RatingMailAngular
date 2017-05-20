(function() {
    'use strict';

    angular.module('formApp')
            .controller('menuCtrl', menuCtrl);
    function menuCtrl($rootScope, $localStorage, $scope, $http, $interval, $state) {


        //права доступа
        if ($localStorage.user.role === 'Админ') {
            $scope.home = true;
            $scope.invite = true;
            $scope.view = true;
            $rootScope.editOption = true;
            $rootScope.delOption = true;

        }
        else if ($localStorage.user.role === 'Юзер') {
            $scope.home = true;
            $scope.view = true;
            $scope.invite = false;
            $rootScope.editOption = true;
            $rootScope.delOption = false;

        }
        else if ($localStorage.user.role === 'Гость') {
            $scope.home = true;
            $scope.view = true;
            $scope.invite = false;
            $rootScope.editOption = true;
            $rootScope.delOption = false;
        }


        $scope.logout = function() {

            $localStorage.$reset();
            $state.go('login');
            console.log("Вы вылогинились");
        };
    }
    ;





})();