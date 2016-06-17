(function(){
var app = angular.module('dashboard', []);

app.controller('globalController', ['$scope', function($scope){
	$scope.message = "Wiadomość z kontrolera";
	$scope.wskaz = "Wskaźniki"
}]);

})();

