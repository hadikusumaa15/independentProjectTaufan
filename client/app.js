var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'pesController'
		})
		.when('/pesanan', {
			templateUrl:'templates/list.html',
			controller:'pesController'
		})
		.when('/pesanan/create', {
			templateUrl:'templates/add.html',
			controller:'pesController'
		})
		.when('/pesanan/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'pesController'
		})
		.when('/pesanan/:id/show', {
			templateUrl:'templates/show.html',
			controller:'pesController'
		})

		.when('/products', {
			templateUrl:'templates/listbrg.html',
			controller:'pesController'
		})
		.when('/products/create', {
			templateUrl:'templates/addbrg.html',
			controller:'pesController'
		})
		.when('/products/:id/edit', {
			templateUrl:'templates/editbrg.html',
			controller:'pesController'
		})
		.when('/products/:id/show', {
			templateUrl:'templates/showbrg.html',
			controller:'pesController'
		});
});
