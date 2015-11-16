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
    if(i<input.length){
       if(i>0){
          recursiveStringReturn += " ";
       }
       recursiveStringReturn += morseMap[input.charAt(i).toUpperCase()];
       i = i+1;
       morseRecurse(input,i);
    } else {
        return;
    } 
}

