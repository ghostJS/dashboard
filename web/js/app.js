(function(){
	// dodanie zależności do modułu - ngRoute
	var app = angular.module('dashboard', ['ngRoute']);


	// odwolanie do modułu i do metody konfig, dzięki zależności routeProvider można definiować ścieżki
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/dashboard', {
				templateUrl: 'views/dashboard.html'
			})
			.when('/employees', {
				templateUrl: 'views/employees.html'
			})
			.when('/clients', {
				templateUrl: 'views/clients.html'
			})
			.otherwise({
				redirectTo: '/dashboard'
			});
	}]);

	app.controller('globalController', ['$scope', function($scope){
		$scope.message = "Wiadomość z kontrolera";
		$scope.wskaz = "Wskaźniki"
	}]);

})();


