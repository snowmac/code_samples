function number_cruncher(number){

    // note, written to support up to $99,999. 

    this.end_of_string = "0/100"; 
    this.number_to_compute = number; 

    // setup data structures 
    this.single_digit = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    }

    this.tens = {
        1: "teen",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    // not json / associative array as order is important 
    this.place = ["thousand","hundred","tens"]

    this.get_string = function(){
        number = this.strip_decimal(this.number_to_compute); 
        if(number>99999) return "This was designed to only support a number up to $99,999";
        if(!this.isNumber(number)) return "Please provide a number";
        if(number<=0) return "Please provide a number greater then zero"; 
        var return_string = "";
        for(var key = 0; key < this.place.length; key++){
            var value = this.place[key]; 
            var key_value = 10; 
            if(value=="thousand"){ key_value = 1000; }else if(value=="hundred"){ key_value = 100; }
            var index = number / key_value;
            if(number > 0 && number < 10){
                if(key==2){
                    if(return_string==""){
                        return_string = this.handle_tens(number) + " ";
                    } else {
                        return_string += this.handle_tens(number) + " ";
                    }
                }
            } else if(parseInt(index) > 0){
                if (value == "tens"){
                    return_string += this.handle_tens(number) + " ";
                } else {
                    return_string += this.handle_larger(number,key_value) + " ";
                    number = this.number_to_compute; 
                }
            } 
        }
        return (return_string + "and " + this.end_of_string).trim() + " dollars";
    }

    this.handle_larger = function(number,key_value){
        // need to determine if the key can go into the number, if so it's an instance of that number
        // we don't care about decminal values
        var whole_number = parseInt(number/key_value);
        // if the number is an instance of that number
        if(whole_number>0){
            // we want to get the next place. 
            var next_number = number - (whole_number * key_value);
            // throw the next number into a value we don't care about. 
            this.number_to_compute = next_number; 
            var current_number = number - next_number; // ex 330 - 30 == 300

            var eng_key = "";
            if(key_value=="100") eng_key = "hundred";
            if(key_value=="1000") eng_key = "thousand";

            if(whole_number<10){
                var eng_front = this.single_digit[whole_number];
            } else {
                var eng_front = this.handle_tens(whole_number);
            }

            return (eng_front + " " + eng_key);  
        }
    }
        
    this.handle_tens = function(number){
        var return_string = ""; 
        found = true; // default, changed later if need be
        // check for the easy cases
        switch(number){
            case 10: return_string = "ten"; break;
            case 11: return_string = "eleven"; break;
            case 12: return_string = "twelve"; break;
            case 13: return_string = "thirteen"; break;
            default: found = false;
        }

        if(!found){
            // get the tens place number (1, 2, 3 etc) use that to convert to (teen, twenty, thirty) etc...
            // checking for those pesky teens
            // number - 10 < 10 checks for if the number less 10 has values 1-9, if so it's a teen
            if(number < 10){
                return_string = this.single_digit[parseInt(number)]; 
            } else if((number - 10) < 10 ){
                // gets us the ones place
                var ones_place = number - 10; 
                // gets us the english translation
                var eng = this.single_digit[ones_place];
                // set the string
                return_string = eng + "teen"; 
            } else {
                var tens_place = parseInt(number / 10); 
                var tens_place_eng = this.tens[tens_place]; 
                var ones_place =  parseInt(number - (10 * tens_place));
                var ones_place_eng = this.single_digit[ones_place];

                if(tens_place_eng && ones_place_eng)
                    return_string = tens_place_eng + "-" + ones_place_eng;
                else
                    return_string = tens_place_eng;
            }
        }
        return return_string; 
    }


    // helper functions
    this.strip_decimal = function(number) {
        if(!this.isNumber(number)) return "Please provide a valid number"; 
        var ret = number;
        // checks to see if there is a decimal 
        if(ret % 1 != 0) {
            ret = parseInt(ret); 
            // get the decimal value 
            var dec = number - ret; 
            // scale to non decimal
            dec = Math.ceil(dec * 100); 
            if(dec < 10) {
                dec = "0" + dec; 
            }
            this.end_of_string = dec + "/100"; 
        }
        return ret; 
    }

    this.isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

}