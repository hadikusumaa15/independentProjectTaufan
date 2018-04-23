myApp.controller('pesController', function($scope,$route,$routeParams,$http){
	//////crud pesanan
	$scope.getPesanan = function(){
		$http.get('/pesanan').then(function(response){
			$scope.pesanan = response.data;
		});
	};
	$scope.showPesanan = function(){
		var id = $routeParams.id;
		$http.get('/pesanan/'+ id).then(function(response){
			$scope.pesan = response.data;
		});
	};
	$scope.addPesanan = function(){
		//var id = $routeParams.id;
		$http.post('/pesanan/', $scope.pesan).then(function(response){
			//$scope.pesan = response.data;
			window.location.href = '/';
		});
	};
	$scope.updatePesanan = function(){
		var id = $routeParams.id;
		$http.put('/pesanan/'+ id , $scope.pesan).then(function(response){
			//$scope.pesan = response.data;
			window.location.href = '/';
		});
	};
	$scope.deletePesanan = function(id){
		var id = id;
		$http.delete('/pesanan/'+ id).then(function(response){
			$route.reload();
		});
	};

	/////CRUD KONTEN
$scope.getProducts = function(){
    $http.get('/products').then(function(response){
        $scope.products = response.data;
    });
};
$scope.showProducts = function(){
    var id = $routeParams.id;
    $http.get('/products/'+ id).then(function(response){
        $scope.product = response.data;
    });
};
$scope.addProducts = function(){
    $http.post('/products/', $scope.product).then(function(response){
        window.location.href = '/';
    });
};
$scope.updateProducts = function(){
    var id = $routeParams.id;
    $http.put('/products/'+ id , $scope.product).then(function(response){
        window.location.href = '/';
    });
};
$scope.deleteProducts = function(id){
    var id = id;
    $http.delete('/products/'+ id).then(function(response){
        $route.reload();
    });
};
	
});