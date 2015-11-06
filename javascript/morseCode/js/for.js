function morseFor(input) {
    var returnString = "";
    var map = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        " ": "/"
    }
    
    for(var i = 0; i < input.length; i++){
        if(i>0&&i<input.length){
            returnString += " "; // adding a space to output
        }
        
        returnString += map[input.charAt(i).toUpperCase()]; 
    }

    return returnString;
}
