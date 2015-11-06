function morseCoderMap(input) {
    var returnString = "";
    var morseKey = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        " ": "/"
    }
    
    
    var arr = input.split("");
    
    arr.map (function(value, i){
        if(i>0&&i<input.length){
            returnString += " "; // adding a space to output
        }
        
        returnString += morseKey[value.toUpperCase()]; 
    });
    return returnString; 
}

