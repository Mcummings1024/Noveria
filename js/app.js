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
	var self = this;

	self.navClicked = function(button) {
		if(button === "home") {
			document.getElementById("homeBtn").classList.add("clicked");
			document.getElementById("factsBtn").classList.remove("clicked");
			document.getElementById("aboutBtn").classList.remove("clicked");
			document.getElementById("joinBtn").classList.remove("clicked");
		}
		else if(button === "facts") {
			document.getElementById("homeBtn").classList.remove("clicked");
			document.getElementById("factsBtn").classList.add("clicked");
			document.getElementById("aboutBtn").classList.remove("clicked");
			document.getElementById("joinBtn").classList.remove("clicked");
		}
		else if(button === "about") {
			document.getElementById("homeBtn").classList.remove("clicked");
			document.getElementById("factsBtn").classList.remove("clicked");
			document.getElementById("aboutBtn").classList.add("clicked");
			document.getElementById("joinBtn").classList.remove("clicked");
		}
		else {
			document.getElementById("homeBtn").classList.remove("clicked");
			document.getElementById("factsBtn").classList.remove("clicked");
			document.getElementById("aboutBtn").classList.remove("clicked");
			document.getElementById("joinBtn").classList.add("clicked");
		}
	};
});

app.controller('FactsController', function() {

});

app.controller('AboutController', function() {

});

app.controller('JoinController', function() {

});

app.controller('WhoopsController', function() {

});