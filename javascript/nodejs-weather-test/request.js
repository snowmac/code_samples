var events = require('events');
var http = require('http');
var config = require('./config');

var getCorrectPath = function(path){
	return (config.api.baseUrl + path + "&APPID=" + config.api.key);
}

var requestor = function(){  
	this.makeRequest = function(rMethod, url){
		var self = this;
		var options = { 
			hostname: config.api.hName, 
			port: config.api.requestPort, 
			path: getCorrectPath(url), 
			method: rMethod 
		};

		this.request = http.request(options, function(res) {
			res.on('data', function(d) {
					data = d.toString();
					data["options"] = options;
					console.log(data)
					self.emit("request", data);
			});
		});

		this.request.end();
		this.request.on('error', function(e) {
		    console.error(e);
		});		
	}
}

requestor.prototype.__proto__ = events.EventEmitter.prototype;

module.exports = requestor;
