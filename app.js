var app = angular.module('tutoApp', ['fruitModule', 'routageModule']);
var fruitModule = angular.module('fruitModule', []);
var routageModule = angular.module('routageModule', ['ngRoute'] )

routageModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/fruit", {
        templateUrl: "components/fruit/fruit.html",
        controller: "fruitController"
    })
    .when("/panier", {
        templateUrl: "components/panier/panier.html",
        controller: "panierController"
    })
    .otherwise({
        redirectTo: "fruit"
    })
}]);

