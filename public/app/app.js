/**
 * Created by kiran on 3/28/2014.
 */
//define th angular module and include the ngResource and ngRoute modules
angular.module('app',['ngResource','ngRoute']);
//define the client side route by calling the client side function

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'});

});
//creating a simple controller to verify how an application works
angular.module('app').controller('mainCtrl', function($scope) {
    $scope.myVar = "Hello Angular";
});