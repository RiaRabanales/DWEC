var myInput;

/**
 * Función reutilizable en todas las demás: toma el input, lo imprime por pantalla y lo devuelve.
 */
function captureInput(){
    myInput = document.getElementById("myInput").value;
    console.log("Input: " + myInput);
    return myInput;
}

/**
 * Función del ejercicio 01: numero signe.
 */
function numSign(){
    myInput = captureInput();

    if (myInput == 0){
        document.getElementById("divResults").innerHTML = "ZERO";
    } else if (myInput > 0){
        document.getElementById("divResults").innerHTML = "POSITIVE";
    } else if (myInput < 0){
        document.getElementById("divResults").innerHTML = "NEGATIVE";
    } else {
        document.getElementById("divResults").innerHTML = "WRONG INPUT VALUE";
    }
}

/**
 * Función del ejercicio 02: es numero.
 */
function isNumber(){
    myInput = captureInput();
    //TODO: comprobar que no me pase algo vacío¿???

    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
        //También podría usar: !number(myInput)
    } else {
        document.getElementById("divResults").innerHTML = myInput + " IS A NUMBER.";
    }
}

/**
 * Función del ejercicio 03: numero part entera.
 */
function numberIntegerPart(){
    myInput = captureInput()
    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
    } else {
        //.floor() sólo funciona con números positivos
        myInput = Math.abs(myInput);
        var inputInteger = Math.floor(myInput);
        document.getElementById("divResults").innerHTML = "INTEGER: " + inputInteger;
    }
}

/**
 * Función del ejercicio 04: numero part decimals.
 */
function numberDecimalPart(){
    myInput = captureInput()
    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
    } else {
        //var inputDecimal = myInput % 1;  OJO: esto no me da exacto
        myInput = Math.abs(myInput);
        var inputDecimal = myInput - Math.floor(myInput);
        //ESTO TAMPOCO ME DA EXACTO??? TODO: PREGUNTAR
        document.getElementById("divResults").innerHTML = "DECIMAL: " + inputDecimal;
    }
}

/**
 * Función del ejercicio 05.
 */
function divideWithDecimals(){
    myInput = captureInput()
    if (isNaN(myInput)) {
        document.getElementById("divResults").innerHTML = myInput + " IS NOT A NUMBER.";
    } else {
        var result = myInput / 19;
        document.getElementById("divResults").innerHTML = myInput + " / 19 = " + result.toFixed(2);
    }
}

/**
 * Función del ejercicio 06.
 */
function checkEmptyString(){
    myInput = captureInput();
    if (!myInput.length) {
    document.getElementById("divResults").innerHTML = "This string is empty.";
    } else {
        document.getElementById("divResults").innerHTML = myInput + " is not an empty string.";
    }  
    //Ver: https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript
}

/**
 * Función del ejercicio 07: invertir un string
 */
function invertString(){
    myInput = captureInput();
    var reverseInput = "";
    for (var i = myInput.length; i > 0; i--) {
        reverseInput += myInput[i-1];
    }
    document.getElementById("divResults").innerHTML = myInput + " in reverse is:<br>" + reverseInput;

    /*
    Otra opción:
    let splitInput = myInput.split("");
    let reverseInput = splitInput.reverse().join("");
    */
}

/**
 * Función del ejercicio 08: contar 'a'
 */
//ver para match(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
function countAs(){
    myInput = captureInput();
    var count = 0;
    for (var i = 0; i < myInput.length; i++) {
        if (myInput[i] == 'a') {
            count++;
        }
    }
    document.getElementById("divResults").innerHTML = " The letter a is this many times in " + myInput + ': ' + count;
}

/**
 * Función del ejercicio 09: substring abans de la primera a.
 */
function substringAbansA(){
    myInput = captureInput();
    var positionA = myInput.indexOf('a');
    if (positionA == -1){
        document.getElementById("divResults").innerHTML = "This string has no a."
    } else {
        var stringA = myInput.slice(0, positionA);
        document.getElementById("divResults").innerHTML = "Before the first a: " + stringA;
    }
}

/**
 * Función del ejercicio 10: posició de primera i darrera a
 */
function findAs(){
    myInput = captureInput();
    var positionAFirst = myInput.indexOf('a');
    if (positionAFirst == -1){
        document.getElementById("divResults").innerHTML = "This string has no a."
    } else {
        var positionALast = myInput.lastIndexOf('a');
        if (positionALast == -positionAFirst){
            document.getElementById("divResults").innerHTML = "This string only has one a, and it's at position " + positionAFirst;
        } else if (positionAFirst == -1){
            //eso seria lo mismo q lo anterior?
        } else {
            document.getElementById("divResults").innerHTML = "The first a is at position " + positionAFirst + "<br> The last a is at position " + positionALast + "<br>";
        }
    }   
}


/**
 * Función del ejercicio 11: esborrar as.
 */
function deleteAs(){
    myInput = captureInput();
    myInput = myInput.replace(/a/g, '');
    document.getElementById("divResults").innerHTML = myInput;
}

/**
 * Función del ejercicio 12: canviar a per *.
 */
function changeAs(){
    myInput = captureInput();
    myInput = myInput.replace(/a/g, '*');
    document.getElementById("divResults").innerHTML = myInput;
}

/**
 * Función del ejercicio 13: cap i cua.
 */
function reverseAndAdd(){
    myInput = captureInput();
    var reverseInput = "";
    reverseInput += myInput[0];
    for (var i = myInput.length; i > 0; i--) {
        reverseInput += myInput[i-1];
    }
    reverseInput += myInput[0];
    document.getElementById("divResults").innerHTML = reverseInput;
}

/**
 * Función del ejercicio 14: eliminar espais
 */
function noSpaces(){
    myInput = captureInput();
    myInput = myInput.replace(/ /g, '');
    document.getElementById("divResults").innerHTML = myInput;
}

/**
 * Función del ejercicio 15.
 */
//TODO

/**
 * Función del ejercicio 16.
 */
//TODO

/**
 * Función del ejercicio 17.
 */
//TODO