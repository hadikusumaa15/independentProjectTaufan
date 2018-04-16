myApp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.getPesan = function(){
		$http.get('/pesan/').then(function(response){
			$scope.employees = response.data;
		});
	};
	$scope.showPesan = function(){
		var id = $routeParams.id;
		$http.get('/pesan/'+ id).then(function(response){
			$scope.employee = response.data;
		});
	};
	$scope.addPesan = function(){
		//var id = $routeParams.id;
		$http.post('/pesan/', $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.updatePesan = function(){
		var id = $routeParams.id;
		$http.put('/pesan/'+ id , $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.deletePesan = function(id){
		var id = id;
		$http.delete('/pesan/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});