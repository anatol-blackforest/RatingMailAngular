(function () {
'use strict';

angular.module('formApp')
.controller('signupCtrl',signupCtrl);
function signupCtrl($rootScope, $scope, $http, $interval, $stateParams, registerService){
    $scope.role = $stateParams['role'];
    $scope.remail = $stateParams['email'];
    console.log($scope.role + $scope.remail);
    var role;
    $scope.selectRole = function () {
        role = $scope.role;

    },

    $scope.insertData = function () {
        if ($scope.rpassword !== $scope.cpassword) {
            $scope.error = "Пароль кривоват";
        } else {
            console.log(role);
            var x = registerService.storeData($scope.name, $scope.remail, $scope.rpassword, $scope.role,$scope.date_of_birth);
            
            console.log(x);
            if (x === false) {
  
                $scope.error = "Шото пошло не так";
            } else {
                $scope.error = "Регистрация успешна!";
            }
            console.log("something " + x);
        }
    };

};
})();
