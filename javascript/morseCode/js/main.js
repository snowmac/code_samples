$(document).ready(function() {

    var  firstInput = "bad dad"; 
    var firstExpected = "-... .- -.. / -.. .- -..";

    var secondInput = "deed";
    var secondExpected = "-.. . . -..";

    var yes = "<span class='yes'>YES!</span>";
    var no = "<span class='no'>NO :(</span>";

    $('#forloop1').html( (morseFor(firstInput) == firstExpected) ? yes : no );
    $('#map1').html( (morseCoderMap(firstInput) == firstExpected) ? yes : no );
    $('#recrusive1').html( (morseRecursive(firstInput) == firstExpected) ? yes : no );


    $('#forloop2').html( (morseFor(secondInput) == secondExpected) ? yes : no );
    $('#map2').html( (morseCoderMap(secondInput) == secondExpected) ? yes : no );
    $('#recrusive2').html( (morseRecursive(secondInput) == secondExpected) ? yes : no );

});