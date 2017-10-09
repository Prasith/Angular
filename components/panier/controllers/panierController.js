fruitModule.controller('panierController', ['$scope','fruitService', function ($scope, fruitService) {

$scope.panier = fruitService.panier;

}]);