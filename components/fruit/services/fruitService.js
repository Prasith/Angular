fruitModule.service("fruitService", [function () {
    this.panier = [];

    this.ajouterFruitAuPanier = function (fruit) {
        this.panier.push(fruit.Nom);
    }
}]);

fruitModule.service("serveurService", ['$http', function ($http) {
    this.getFruits = function () {
        return $http.get('fruits.json')
    };
}]);