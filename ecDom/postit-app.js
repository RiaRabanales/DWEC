contador = 0;

//TODO falta el intercambio

function lanzarScript() {
  generarFormulario();

  document.getElementById("addPostIt").addEventListener("click", generarPostIt);
  document.getElementById("setColor").addEventListener("click", cambiarColor);
}

function generarFormulario() {
  var tagDiv = document.createElement("div");
  var formulario = `
    <input type="text" id="miPostIt" />
    <button id="addPostIt">añadir post-it</button>
    <br/><br/>
    <select id="color" name="color">
      <option value="pink">rosa</option>
      <option value="red">rojo</option>
      <option value="green">verde</option>
      <option value="blue">azul</option>
      <option value="yellow">amarillo</option>
      <option value="orange">naranja</option>
    </select>
    <button id="setColor">cambiar color</button>
  `;
  tagDiv.innerHTML = formulario;
  tagDiv.style.width = "100%";
  tagDiv.style.background = "skyblue";
  tagDiv.style.padding = "2%";
  //tagDiv.childNodes[0].style.margin = "1%";   no funciona
  document.body.appendChild(tagDiv);

  //Genero el div de post-its:
  var bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");
  bodyDiv.style.display = "flex";
  bodyDiv.style.flexFlow = "row wrap";
  document.body.appendChild(bodyDiv);
}

function generarPostIt() {
  //Genero el recuadro:
  var tagPostIt = document.createElement("div");
  var idPostIt = "div" + contador++;
  tagPostIt.setAttribute("id", idPostIt);
  tagPostIt.className = "miPostIt";
  tagPostIt.style.width = "100px";
  tagPostIt.style.height = "100px";
  tagPostIt.style.background = "yellow";
  tagPostIt.style.border = "2px solid black";
  tagPostIt.style.margin = "1%";

  //Genero el header:
  var headerPostIt = document.createElement("div");
  headerPostIt.style.display = "flex";
  headerPostIt.style.borderBottom = "1px solid black";
  headerPostIt.style.justifyContent = "space-between";
  headerPostIt.style.alignItems = "center";
  headerPostIt.style.padding = "0.5%";
  /* var headerContent = `
    <div>
        <input type="checkbox">
    </div>
    <div>
        <button style="color:white; background:black;">X</button>
    </div>
    `;
  headerPostIt.innerHTML = headerContent;
  */

  var headerLeft = document.createElement("div");
  var headerLeftContent = document.createElement("input");
  headerLeftContent.type = "checkbox";
  headerLeft.appendChild(headerLeftContent);

  var headerRight = document.createElement("div");
  var headerRightContent = document.createElement("button");
  headerRightContent.style.color = "white";
  headerRightContent.style.background = "black";
  headerRightContent.innerText = "X";
  headerRightContent.addEventListener("click", function () {
    this.parentNode.parentNode.parentNode.remove();
  });
  headerRight.appendChild(headerRightContent);

  headerPostIt.appendChild(headerLeft);
  headerPostIt.appendChild(headerRight);

  tagPostIt.appendChild(headerPostIt);

  //Genero el contenido:
  var bodyPostIt = document.createElement("div");
  bodyPostIt.style.padding = "1%";
  bodyPostIt.style.cursor = "grabbing";
  bodyPostIt.addEventListener("click", function () {
    intercambiarPostIt(idPostIt);
  });
  var textoPostIt = document.getElementById("miPostIt").value;
  var pTextoPostIt = document.createElement("p");
  pTextoPostIt.style.textAlign = "center";
  pTextoPostIt.innerHTML = textoPostIt;
  bodyPostIt.appendChild(pTextoPostIt);

  tagPostIt.appendChild(bodyPostIt);

  //Lo subo a la página:
  var bodyDiv = document.getElementById("bodyDiv");
  bodyDiv.appendChild(tagPostIt);
}

function cambiarColor() {
  var miColor = document.getElementById("color").value;
  let checks = document.querySelectorAll('input[type="checkbox"]:checked');
  for (let checkbox of checks) {
    checkbox.parentNode.parentNode.parentNode.style.background = miColor;
    //console.log(checkbox.parentNode.parentNode.parentNode);
  }
}

/*
Intercanviar postit: En clicar a sobre del text interior de un Postit, aquest Postit se intercanvia amb el postit que té a la seva esquerra.
 Si el postit és el primer de tots, llavors s’intercanvia amb el darrer de la llista de postits.
*/
function intercambiarPostIt(idBase) {
  //Recordar que he generado un id para cada post it: var idPostIt = "div" + contador++; empezando por div0
  let postits = document.getElementsByClassName("miPostIt");
    console.log(postits);
  let posicion = obtenerPosicion(document.getElementById(idBase), postits);
  console.log(posicion);

  let copiaPostIt = document.getElementById(idBase).cloneNode(true);
  copiaPostIt.addEventListener("click", function() { intercambiarPostIt(idBase)});

  document.getElementById(idBase).remove();

  if (posicion == 0) {
    document.getElementById("bodyDiv").appendChild(copiaPostIt);
  } else {
    document.getElementById("bodyDiv").insertBefore(copiaPostIt, document.getElementById("bodyDiv").children[posicion + 1]);
    //Realmente insertBefore ya me haría lo codificado en el if
  }

}

function obtenerPosicion(div, postits) {
  let i;
  for (i = 0; i < postits.length; i++) {
    if (div == postits[i]) {
      return i;
    }
  }
}
