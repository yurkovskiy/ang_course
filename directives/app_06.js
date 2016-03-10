var app = angular.module("myapp", []);
app.directive("myDir", function() {
	return {
		restrict: "EA",
		template: "<div>My Directive Template</div>",
		replace: true
	}
});