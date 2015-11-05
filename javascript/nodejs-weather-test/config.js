// Weather info from http://openweathermap.org/api 

var config = {
	api: {
		key: "3c09408cdd7028e2fdb1628c4b06160b", 
		hName: "api.openweathermap.org",
		baseUrl: "/data/2.5/",
		requestPort: 80
	},
	debug: {
		print: {
			enabled: false
		}
	}
}

module.exports = config;
