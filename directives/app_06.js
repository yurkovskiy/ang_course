var app = angular.module("myapp", []);
app.directive("mydir", function() {
	return {
		restrict: "EA",
		template: "<div>mydir Template</div>",
		replace: true
	}
});

app.directive("mytdir", function() {
	return {
		restrict: "EA",
		transclude: true,
		template: "<div>mytdir template</div><div ng-transclude></div>",
	}
});


app.controller("AppController", function($scope) {
	$scope.value = "[value] from controller";
});