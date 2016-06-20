// gruntfile.js
module.exports = function(grunt) {

	grunt.registerTask("default", function() {
		grunt.log.writeln("Hello World!");
	});


	grunt.config.init({
		weather: {
			born: 707471, // IF
			home: 700507 // Nadvirna
		}
	});

	// Coonect to openweather API
	grunt.registerMultiTask("weather", "fetch weather", function() {
		var done, http, location, request, requestOptions, city_id;

		http = require("http");	

		city_id = this.data;
		location = this.target;
		var API_KEY = "d75da5829ee2244d5a25bbb10c1a7318";
		
		requestOptions = {
			host: "api.openweathermap.org",
			path: "/data/2.5/weather?id=" + city_id + "&appid=" + API_KEY,
			port: 80,
			method: "GET"
		};

		done = this.async();
		request = http.request(requestOptions, function(response) {
			var buffer = "";
			response.on("data", function(data) {
				buffer += data;
			});

			response.on("end", function() {
				var weather = JSON.parse(buffer);
				grunt.log.writeln(location + " " + weather.name + ": " + parseFloat(weather.main.temp - 273.15).toFixed(2));

				done();
			});
		});

		request.end();


	});


}