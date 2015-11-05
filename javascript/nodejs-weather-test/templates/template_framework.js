var index = function(){
	return "foo bar";
}

var weatherListing = function(data, history) {
	var csv = ""; 
	for (index = 0; index < history.length; ++index) {
		csv += " <a href='/location/" + history[index]["url"] +"'>" + history[index]["url"] + "</a>";
		if(!(history.length-1)==index) {
			csv += ", ";
		} 
	}
	console.log(history)
	csv += "<br/>"; 

	start = "<ul>";
		inside1 = "<li> <strong> Weather </strong>: " + data["weather"][0]["main"]; 
		inside2 = "<li> <strong> Description </strong>: " + data["weather"][0]["description"]; 
		inside3 = "<li> <strong> Location </strong>: " + data["name"]; 
	end = "</ul>"; 
	return (csv + start + inside1 + inside2 + inside3 + end); 
}


module.exports.index = index;
module.exports.weatherListing = weatherListing;
