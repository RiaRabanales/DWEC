contador = 0;

function lanzarScript() {
  generarFormulario();

  document.getElementById("addPostIt").addEventListener("click", generarPostIt);
}

function generarFormulario() {
  var tagDiv = document.createElement("div");
  var formulario = `
    <input type="text" id="miPostIt" />
    <button id="addPostIt">añadir</button>
  `;
  tagDiv.innerHTML = formulario;
  document.body.appendChild(tagDiv);
}

function generarPostIt() {

    //Genero el recuadro:
    var tagPostIt = document.createElement("div");
    var idPostIt = "div" + contador++;
    tagPostIt.setAttribute("id", idPostIt);
    tagPostIt.style.width = "300px";
    tagPostIt.style.width = "350px";
    tagPostIt.style.background = "yellow";
    tagPostIt.style.border = "2px solid black";
    tagPostIt.style.margin = "2%";
    tagPostIt.style.padding = "2%";

    //Genero el contenido:
    var headerPostIt = `
    <div>
        <input type="checkbox">
    </div>
    `
    tagPostIt.innerHTML = headerPostIt;

    var bodyPostIt = document.createElement("div");
    var textoPostIt = document.getElementById("miPostIt").value;
    var pTextoPostIt = document.createElement("p");
    bodyPostIt.appendChild(pTextoPostIt);
    pTextoPostIt.innerHTML = textoPostIt;
    tagPostIt.innerHTML += bodyPostIt;

    //Lo subo a la página:
    document.body.appendChild(tagPostIt);
}
