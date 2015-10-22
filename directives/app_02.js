var app = angular.module("myapp", []);
app.directive("myDir", function() {
	return {
		restrict: "ECMA",
		link: function(scope, element, attr) {
			console.log("directive has been worked");
		}
	}
});