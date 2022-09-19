// function mostrarHora (){
//     var espacio = document.getElementById("reloj");
    
//     let horaactual = new Date()

//     var segundo = horaactual.getSeconds();
//     var minutis= horaactual.getMinutes();
//     var horas=horaactual.getHours();
//     var horafinal = horas + ":" + minutis+ ":" + segundo;

//     espacio.innerHTML = horafinal;

//     setTimeout(mostrarHora, 1000)
// }

// function bebida(){
//     var cocaCola = document.getElementById("radio1")
//     var pepsi = document.getElementById("radio2")
//     var postobon = document.getElementById("radio3")
//     var Calorias = document.getElementById("Calorias")
//     var Precio = document.getElementById("Precio")
    

//     if (cocaCola.checked) {
//         Calorias.innerHTML = `<label>¿CocaCola Zero?</label>
//         <br>
//         <label><input type='radio' name='cocaColaName' id="CocaColaZero" class='form-check-input'>si</label>
//         <label><input type='radio' name='cocaColaName' id="CocaColaTradicional" class='form-check-input'>no</label>`;
//     }else{
//         if (pepsi.checked) {
//             Calorias.innerHTML = "Las calorias de la Pepsi son: 300"
//     }else{
//         Calorias.innerHTML = "Las calorias de la Postobon son: 200"
//     }
//     }
// }
o
// function aumentar (){
//     var texto = document.getElementById("texto")
//     var size = parseInt(window.getComputedStyle(texto).fontSize)
//     texto.style.fontSize = (size + 10) + "px"
// }
// var button_cambiaColor = document.getElementById("cambiaColor")
//     var button_restablecer = document.getElementById("restablecer")
//     var button_ocultar = document.getElementById("ocultar")
//     var button_cambiaFuente = document.getElementById("cambiaFuente").value;
//     var select_color = document.getElementById("select_color").value;

function aumentarTamanio (){
    document.body.style.fontSize = "20px";
}
function disminuirTamanio (){
    document.body.style.fontSize = "15px";
}

function mostrarOpciones (){
    document.getElementById("opciones").hidden=false;
    document.getElementById("activar").hidden=true;
}

function ocultar(){
    document.getElementById("opciones").hidden=true;
    document.getElementById("activar").hidden=false;
}

function cambiarColor(){
    var select_color = document.getElementById("select_color").value;
    document.body.style.backgroundColor = select_color;
}

function cambiarLetra(){
    var cambiaFuente = document.getElementById("cambiaFuente").value;
    document.body.style.fontFamily = cambiaFuente;
}

function cambiarColorLetra(){
    var cambiar_color_letra = document.getElementById("cambiar_color_letra").value;
    document.body.style.color = cambiar_color_letra;
}

function restablecer(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontFamily = "Arial";
    document.body.style.fontSize = "15px";
}