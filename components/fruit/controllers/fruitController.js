fruitModule.controller('fruitController',  ['$scope', 'fruitService', 'serveurService', function ($scope, fruitService, serveurService) {
   
  var promiseGet = serveurService.getFruits();

    promiseGet.then(
        function (response) {
            $scope.fruits = response.data;
        },
        function (error) { alert(error); }
        );


		$scope.ajouterFruitAuPanier = function (fruit) {
        fruitService.ajouterFruitAuPanier(fruit);
  		};

}]);

/*
$scope.supprimerFruitDuPanier = function (fruit) {

		//$scope.panier.splice(0, 1);

		for(var i = $scope.panier.length - 1; i >= 0; i--) {
    		if($scope.panier[i] === "pomme") {
     	 		 $scope.panier.splice(i, 1);
    		}
    		else if ($scope.panier[i] === "poire") {
     	 		 $scope.panier.splice(i, 1);
    		}
    		else if ($scope.panier[i] === "prune") {
     	 		 $scope.panier.splice(i, 1);
    		}
		}
    }; */