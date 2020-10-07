function captureInput(){
    myInput = document.getElementById("myInput").value;
    console.log("Input: " + myInput);
    return myInput;
}

function numSign(){
    myInput = captureInput();
    //TODO: comprobar que sea número y que no entre¿???

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