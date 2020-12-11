//"use strict"
//  ** es operador de exponente */

const constante = 0;

window.onload = function () {
  var prueba;
  prueba = saberNumero("pepino");
  //esta variable, declarada pero no inicializada, es undefined

  console.log(Date.now().toString());

  document.getElementById("content").innerHTML = prueba;

  var str = "Hello world!";
  var res = str.substr(1, 4);
  document.getElementById("content").innerHTML += res;
  // substr: 1er paràmetre: la posició inicial
  // 2on paràmetre: longitud que volem extreure (diferència amb slice(): posició final no inclosa
  // Si el 1er paràmetre és < 0, comença a comptar pel final (no es pot emprar el 2on paràmetre en aquest cas))

  /*
  replace () substitueix la primera ocurrència d’una paraula per una altra
  ● Retorna un string nou - no canvia el contingut de la variable string on aplicam
  replace()
  ● Per substituir totes les ocurrències , emprarem /g
  ● Si volem que la substitució es faci independentment del case , llavors emprarem /i .
  */
};

function saberTipo(miVar){
    return typeof(miVar);
}

function saberNumero(miVar) {
    return "no es un número: " + isNaN(miVar);
}

function maxDecimal(num) {
    //indico el número de posiciones
  num.toFixed(0) + "<br>" +
  num.toFixed(2) + "<br>" +
  num.toFixed(4) + "<br>" +
  num.toFixed(6);
}
