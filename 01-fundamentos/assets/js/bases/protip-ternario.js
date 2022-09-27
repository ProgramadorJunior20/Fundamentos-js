const elMayor = (a, b) => ( a > b ) ? `El mayor es ${a}` : `El mayor es ${b}`;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(22, 16));
console.log(tieneMembresia(true));

const amigo = true;

const amigoArr = [
    'Black Panter',
    'Black Addams',
    'Piter',
    'tony',
    amigo ? 'Thor': 'Loki',
    (() => 'Nick Fury')(), // Esta es una función auto invocada
    elMayor(10, 5),
];

console.log({amigoArr});


const nota = 82.6; 
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});
