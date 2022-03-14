let nombre = prompt('Ingresa tu nombre');
let bienvenido = alert(`Hola ${nombre} bienvenido a café-o-matic`);
let pedido = alert('Desea realizar un pedido?');
let confirmacion = prompt('1: Si,  2: No');


let taza1 = 300;
let cafe1 = 40;
let agua = 270;
let temporizador;

if (confirmacion == 1) {
    alert(
        `Capacidad maxima de la taza es de ${taza1}.
            Gramos maximos de cafe ${cafe1}.
            Litros maximos de agua ${agua}. 
          `)
} else {
    alert('Que tenga un buen día');
}

function prepararCafe(taza, cafe, agua) {

    let azucar = confirm('Desea añadir azucar?');

    if (taza > taza1 && cafe > cafe1 && agua > agua) {
        alert('La capacidad maxima ha sido sobrepasada');
    } else {
        temporizador = setTimeout(function() {
            console.log('Preparando cafe...');
            console.log('Café con sabor suave en camino');
            console.log('Café prepapado');
            console.log('Total a pagar $2500');
        }, 2000);
    }

}


let terminado = (prepararCafe(234, 30, 200));