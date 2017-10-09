fruitModule.filter("dateFilter", ['$filter', function ($filter) {
    return function (input) {
        date = $filter('date')(new Date(input), 'dd/MM à HH:mm');
        return date;
    }
}])