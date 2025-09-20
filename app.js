// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = [];
let listaAmigos = [];

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo);
    limpiarCaja ();    
    
    if(nombreAmigo === "") {
        alert("Debes ingresar un nombre");
        return;    
    }
    listaAmigos.push(nombreAmigo);
    actualizarListaAmigos();
}

 function limpiarCaja() {
   document.querySelector("#amigo").value = "";
 }

function actualizarListaAmigos() {


    listaAmigos.forEach(function(nombreAmigo) {
        asignarTextoElemento("ul.name-list",listaAmigos)
      
        
    })
    
        console.log (listaAmigos);
          

}

function sortearAmigo() {
    let numeroAmigo = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = listaAmigos[numeroAmigo];
        if (listaAmigos.length >= 1) {
            asignarTextoElemento("ul.result-list",amigoSecreto);
        }
        else { 
            asignarTextoElemento("ul.result-list","");
        }
        console.log(amigoSecreto);    

    if(listaAmigos.length === 0) {
        alert("No hay amigos para sortear")
    }
    if(listaAmigos.length === 1) {
        alert("Solo hay un amigo, añade todos los que puedas!!")
        return;
    } 

}
document.getElementById("sorteo").removeAttribute("disabled")

asignarTextoElemento("h2","¡Añade a tus amigos para comenzar!!!!");

//introducir nombre de amigo
//añadir nombres de amigo
//enlistar los nombres añadidos
//alertar de espacio vacio
//sortear amigos
//reiniciar juego
  