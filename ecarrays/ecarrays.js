'use strict'

var myInput;

/**
 * Función reutilizable en todas las demás: toma el input, lo imprime por pantalla y lo devuelve.
 */
function captureInputArray(){
    var myInput = document.getElementById("myInput").value;
    var myArray = myInput.split(',');
    for (let i = 0; i < myArray.length; i++){
        myArray[i] = myArray[i].trim();
    }
    return myArray;
}

function printArray(array) {
    document.getElementById("divResults").innerHTML = "- ";
    for (let i = 0; i < array.length; i++){
        document.getElementById("divResults").innerHTML += array[i] + " - ";
    }
}

/**
 * Función del ejercicio 01: strOrdenaMajor para ordenar strings.
 */
function strOrdenaMajor(){
    var miArray = captureInputArray();
    var miResult = miArray.sort();
    printArray(miResult);

}

/**
 * Función del ejercicio 02: numOrdenaMajor para ordenar números de menor a mayor.
 */
function numOrdenaMajor(){
    var miArray = captureInputArray();
    var miResult = miArray.sort(function(num1, num2) {
        return num1 - num2;
    });
    printArray(miResult);
}

/**
 * Función del ejercicio 03: numOrdenaMenor para ordenar números de menor a mayor.
 */
function numOrdenaMenor(){
    var miArray = captureInputArray();
    var miResult = miArray.sort((num1, num2) => {return num2 - num1});
    printArray(miResult);
}

/**
 * Función del ejercicio 04: strOrdenaPerLong para ordenar strings según su longitud.
 */
function strOrdenaPerLong(){
    var miArray = captureInputArray();
    var miResult = miArray.map(function() {
        //TODO continuar
    }        
    );
    printArray(miResult);
}

