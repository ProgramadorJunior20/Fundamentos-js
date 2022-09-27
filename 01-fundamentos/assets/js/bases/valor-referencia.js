


let a = 10;
let b = a;
a = 30;
b = 40;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana  = { ...juan }; // operador Spread separa los elementos
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => { // ( ...persona ) parametro rest uno todos los argumetos 
                                      // en una sola variable y devuelve un arreglo
    persona.nombre = 'Tonny';
    return persona; 
}

let pater = { nombre: 'Pater' };
let tony  = cambiaNombre( pater );

console.log({ pater, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });