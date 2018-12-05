'use strict';

ExampleCtrl.$inject = ["$scope"];

function ExampleCtrl($scope) {
    $scope.Src = './assets/images/img-1.jpg';
    $scope.Hello = "Boilerplate angularJS + GULP and Browserify";
};

module.exports = ExampleCtrl;