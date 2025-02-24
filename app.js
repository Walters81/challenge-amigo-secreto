// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let listaDeNombres = document.getElementById("listaAmigos");
let elementoAmigoSorteado = document.getElementById("resultado");


//agregar los nombres de los amigos
function agregarAmigo() {
    let nombreDeAmigos = document.getElementById('amigo').value;

    if(nombreDeAmigos===""){
        alert("Ingrese un nombre válido");
    }else{
        listaDeAmigos.push[nombreDeAmigos];
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreDeAmigos;
        listaDeNombres.appendChild(nuevoElemento);
        console.log(nombreDeAmigos);

        limpiarCaja();
    }
}
    
//Sortear el amigo secreto
function sortearAmigo() {
    if(listaDeAmigos.length > 0) {
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        elementoAmigoSorteado.textContent = `El amigo secreto es: ${amigoSorteado}`;
        return amigoSorteado;
    }else{
        alert("Debes ingresar al menos un nombre para poder sortear");
        return null;
    }
}
sortearAmigo();

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
