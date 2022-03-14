const text = 'Aprende a programar aplicaciones web';

const split = (str) => str.split('');

const contar = (arr) => arr.length;

const contarPalabras = (str) => contar(split(str));

const resultado = console.log(contarPalabras(text)); //36

// ejemplo 2

//(x + 3) + 10

const sumarNumeros = (a, b) => a + b;

const multPorDiez = (c) => c * 10;

const x = 4

const res = multPorDiez(sumarNumeros(3, x));

console.log(res);