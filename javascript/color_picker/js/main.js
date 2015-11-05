var settings = {
    "red": 255,
    "green": 255,
    "blue": 255
}

$(document).ready(function() {
    // init the buttons on ready: 
    $("#colorPickerArea input[type='range']").on("change", function(event){
        // get the name of the color
        name = $(this).attr('name');
        // set RGB value equal to the current input value
        settings[name] = $(this).val(); 

        renderIndividuals(); 
        renderAll(); 
        renderString();
    });

    var renderIndividuals = function(){
        $("#colorPreviews #red").css("background-color", "rgb(" + settings["red"] + ", 0, 0)");
        $("#colorPreviews #green").css("background-color", "rgb( 0, " + settings["green"] + ", 0)");
        $("#colorPreviews #blue").css("background-color", "rgb(0, 0, " + settings["blue"] + ")");
    };

    var renderAll = function(){
        $("#colorBox").css("background-color", "rgb(" + 
            settings["red"] + "," +
            settings["green"] + "," + 
            settings["blue"]
        + ")");
    };

    var renderString = function(){
        $("#rgbString p").html("rgb(" + settings["red"] + ", " + settings["green"] + ", " + settings["blue"] + ")")
    };
});