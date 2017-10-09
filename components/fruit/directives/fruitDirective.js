fruitModule.directive("fruitDirective", function () {
    return {
        template: "La {{fruit.Nom}} de couleur {{fruit.Couleur}} perime le {{fruit.Peremption | dateFilter}}"
    };
});