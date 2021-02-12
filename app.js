
//Selectores
const dado1 = document.querySelectorAll('.dado img')[0];
const dado2 = document.querySelectorAll('.dado img')[1];
const titulo = document.querySelector('h1');
const boton = document.querySelector('#btn');

//Numeros al azar
function random() { 
    return Math.floor( (Math.random() * 6) + 1 ) // Número al azar entre 1 y 6
}

const num1 = random();
const num2 = random();

//Nuevos atributos
const atributo1 = `imagenes/dado${num1}.png`;
const atributo2 = `imagenes/dado${num2}.png`;
dado1.setAttribute('src', atributo1);
dado2.setAttribute('src', atributo2);

//Cambiador  de titulo
function ganador() {
    if(num1 > num2)
        return "Gana jugador 1!!";
    else if(num1 < num2)
        return "Gana jugador 2!!";
    else 
        return "Empate!";
}

titulo.textContent = ganador();

//Listener del boton para refrescar 
boton.addEventListener('click', function() {
    window.location.reload();
});



