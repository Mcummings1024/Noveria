var app = angular.module('noveriaApp', ['ngRoute']);
	
app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'HomeController',
		templateUrl: 'home.html'
	});
	$routeProvider.when('/facts',
	{
		controller: 'FactsController',
		templateUrl: 'facts.html'
	});
	$routeProvider.when('/about',
	{
		controller: 'AboutController',
		templateUrl: 'about.html'
	});
	$routeProvider.when('/join',
	{
		controller: 'JoinController',
		templateUrl: 'join.html'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/',
		//controller: 'WhoopsController',
		//templateUrl: '404.html' 
	});
});

app.controller('HomeController', function() {

});

app.controller('FactsController', function() {

});

app.controller('AboutController', function() {

});

app.controller('JoinController', function() {

});

app.controller('WhoopsController', function() {

});