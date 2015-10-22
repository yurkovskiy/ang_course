var app = angular.module("myapp", []);
app.directive("myDir", function() {
	var groups = [
	{
		id: 1,
		group_name: "АУ-02-1"
	},
	{
		id: 2,
		group_name: "АУ-02-2"
	},
	{
		id: 3,
		group_name: "АУ-02-3"
	}
	];
	return {
		restrict: "EA",
		link: function(scope, element, attr) {
			scope.groups = groups;
		},
		templateUrl: "groups.html"
	}
});