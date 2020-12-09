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
    var miResult = miArray.sort(function(a, b) {    //TODO me da undefined!!!!
        return a.length - b.length;
        //sort funciona dando número positivo (lo deja como está) o negativo (lo reordena) para cada par
        //así lo saco ASC; para DESC usaría b-a
    });
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

/**
 * Función del ejercicio 05: que a partir d’un Array de Strings obtengui un
array paral·lel amb les longituts dels elements.
 */
function strArrayLongs(){
    var miArray = captureInputArray();
    //TODO
}

/**
 * Función del ejercicio 06: en passar-li un array
de paraules, crei un String amb aquestes paraules separades per estais, però sense
afegir guions al principi i al final del String
 */
function strCreaFraseGuions(){
    var miArray = captureInputArray();
    //TODO

}

/**
 * Función del ejercicio 07: codi que agafi totes les paraules d’un Array de Strings i
construeixi un acrònim en majúscules.
 */
function strCreaAcronim(){
    var miArray = captureInputArray();
    //TODO

}

/**
 * Función del ejercicio 08: elimina d’un Array de Strings tots aquells
elements que tenguin una longitud inferior a 5
 */
function strFiltreLongitud(){
    var miArray = captureInputArray();
    var miResult = miArray.filter(function(item){
        if (item.length >= 5) {
            return item;
        }
    });
    printArray(miResult);
}

/**
 * Función del ejercicio 09: Obtén la suma total d’un array de números emprant el mètode
forEach()
 */
function numSumaForeach(){
    var miArray = captureInputArray();
    var suma = 0;
    miArray.forEach(function(item){
        suma += parseInt(item);
    });
    document.getElementById("divResults").innerHTML = suma;
}

/**
 * Función del ejercicio 10: codi JS que calculi el número de vegades que
apareix exactament l’string “la” en un array. Exemple: [“ la ”, “o”, “lama”, “t”, “ la ”,
“bela”] → 2
 */
function strOcurrencies(){
    var miArray = captureInputArray();
    //TODO

}

/**
 * Función del ejercicio 11: suma total d’un array de números emprant el mètode reduce()
 */
function numSumaReduce(){
    var miArray = captureInputArray();
    var suma = miArray.reduce(function(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }, 0);
    //0 es el valor inicial; si no lo diera emplearía el primer valor usado.
    document.getElementById("divResults").innerHTML = suma;
}

/**
 * Función del ejercicio 12: valor numèric més alt d’un array emprant forEach
 */
function numMaxForeach(){
    var miArray = captureInputArray();
    var max = 0;
    miArray.forEach(function(item){
        if (parseInt(item) > max) {
            max = parseInt(item);
        }
    });
    document.getElementById("divResults").innerHTML = max;

}

/**
 * Función del ejercicio 13: codi JS que creï un Array nou agafant el primer i el
 * darrer element d’un Array i col·locant-los al centre de l’Array. (Donarem per suposat 
 * que sempre se tractarà d’un Array amb un número parell de posicions) 
 * Exemple: [ “a” , “b”, “c”, “d”, “e”, “f” ] → [“b”, “c”, “a”, “f” , “d”, “e”,]
 */
function restructuraArray(){
    var miArray = captureInputArray();
    //TODO

}

/**
 * Función del ejercicio 14: codi JS que donat un array de números, retalli els tres primers 
 * elements de l’array i els col·loqui al final en ordre invertit.
 * Exemple: [ 1,5,8 ,3,4] → [3,4, 8,5,1 ]
 */
function capCuaArray(){
    var miArray = captureInputArray();
    //TODO

}