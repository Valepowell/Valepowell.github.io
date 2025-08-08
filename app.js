
function asignarTextoElemento(selector, texto) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.textContent = texto;
    }
}

function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    if (amigo) {
        let amigosList = document.querySelector('#amigosList');
        let li = document.createElement('li');
        li.textContent = amigo;
        amigosList.appendChild(li);
        document.querySelector('#amigo').value = ''; // Limpiar el campo de entrada
    } 
    else {
        alert('Por favor, ingresa un nombre de amigo.');
    }
}


function sortearAmigo() {
    let amigosList = document.querySelector('#amigosList');
    let amigos = amigosList.getElementsByTagName('li');
    
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;}
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio].textContent;
    
    asignarTextoElemento('p',`El amigo sorteado es: ${amigoSorteado}`);
}


