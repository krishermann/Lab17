var app = angular.module('routeEx', ['ngRoute']);


app.config(function($routeProvider){

	$routeProvider.when('/',
		{
			controller: 'routeCtrl',
			templateUrl: 'home.html'
		});

	$routeProvider.when('/dogView',
		{
		controller: 'routeCtrl',
		templateUrl: 'dogView.html'
		});

	$routeProvider.when('/catView',
		{
		controller: 'routeCtrl',
		templateUrl: 'catView.html'
		});

	$routeProvider.when('/polarBearView',
		{
		controller: 'routeCtrl',
		templateUrl: 'polarBearView.html'
		});

	$routeProvider.when('/babySealView',
		{
		controller: 'routeCtrl',
		templateUrl: 'babySealView.html'
		});


	$routeProvider.otherwise(
		{
		controller: 'routeCtrl',
		templateUrl: 'error.html'
		});
});

app.controller('routeCtrl', function(){
});