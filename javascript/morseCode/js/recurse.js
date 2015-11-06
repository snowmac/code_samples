var morseMap = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    " ": "/"
};

var recursiveStringReturn;

function morseRecursive(input) {
    recursiveStringReturn = "";    
    morseRecurse(input,0);
    return recursiveStringReturn;
}

function morseRecurse(input,i){
    var value = morseMap[input.charAt(i).toUpperCase()]; 
    if(typeof(value)!=='undefined'){
        if(i>0){
           recursiveStringReturn += " ";
        }
        recursiveStringReturn += value;
    }
    
    if(i<input.length){
       i = i+1;
        morseRecurse(input,i);
    } else {
        return;
    } 
}

