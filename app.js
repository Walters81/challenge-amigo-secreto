// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let listaDeNombres = document.getElementById("listaAmigos");
let elementoAmigoSorteado = document.getElementById("resultado");

// Agregar los nombres de los amigos
function agregarAmigo() {
    let nombreDeAmigos = document.getElementById('amigo').value;

    if(nombreDeAmigos === ""){
        alert("Por favor, inserte un nombre.");
    } else {
        listaDeAmigos.push(nombreDeAmigos);
    }
        listaDeNombres.innerHTML = "";
        for(let i = 0; i <= listaDeAmigos.length; i++){
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = listaDeAmigos[i];
        listaDeNombres.appendChild(nuevoElemento);

        console.log(nombreDeAmigos);
        limpiarCaja();
    }
}

// Sortear el amigo secreto
function sortearAmigo() {
    if(listaDeAmigos.length > 0) {
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        elementoAmigoSorteado.textContent = `El amigo secreto es: ${amigoSorteado}`;
        return amigoSorteado;
    } else {
        alert("Debes ingresar al menos un nombre para poder sortear");
        return null;
    }
}

// Agregar event listener al botón de sorteo
let botonSortear = document.querySelector('#button-draw');
botonSortear.addEventListener("click", sortearAmigo);

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}