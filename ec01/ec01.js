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
//TODO

/**
 * Función del ejercicio 04: numero part decimals.
 */
//TODO

/**
 * Función del ejercicio 05.
 */
//TODO

/**
 * Función del ejercicio 06.
 */
//TODO

/**
 * Función del ejercicio 07.
 */
//TODO

/**
 * Función del ejercicio 08.
 */
//TODO

/**
 * Función del ejercicio 09.
 */
//TODO

/**
 * Función del ejercicio 10.
 */
//TODO

/**
 * Función del ejercicio 11.
 */
//TODO

/**
 * Función del ejercicio 12.
 */
//TODO

/**
 * Función del ejercicio 13.
 */
//TODO

/**
 * Función del ejercicio 14.
 */
//TODO

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