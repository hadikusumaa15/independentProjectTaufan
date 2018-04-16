/////CRUD KONTEN
$scope.getProducts = function(){
    $http.get('/shops').then(function(response){
        $scope.shops = response.data;
    });
};
$scope.showProducts = function(){
    var id = $routeParams.id;
    $http.get('/shops/'+ id).then(function(response){
        $scope.shop = response.data;
    });
};
$scope.addProducts = function(){
    $http.post('/shops/', $scope.shop).then(function(response){
        window.location.href = '/';
    });
};
$scope.updateProducts = function(){
    var id = $routeParams.id;
    $http.put('/shops/'+ id , $scope.shop).then(function(response){
        window.location.href = '/';
    });
};
$scope.deleteProducts = function(id){
    var id = id;
    $http.delete('/shops/'+ id).then(function(response){
        $route.reload();
    });
};