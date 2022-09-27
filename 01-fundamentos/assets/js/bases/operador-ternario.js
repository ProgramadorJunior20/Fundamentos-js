/**
 * Dias de la semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// entre a un sitio web,  para consultar si hoy esta abierto...

const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

/* if ( dia === 0 || dia === 6 )  */
/* if ( [0, 6].includes(dia) ) {
    console.log('Fin de samana');
    horaApertura = 9;
} else {
    console.log('Día de la semana');
    horaApertura = 11;
} */

// si el dia 0 o 6 entonces es verdadero y la horaApertura sera === 9 sino sera === 11;  
horaApertura = ( [0, 6].includes(dia) ) ? 9 : 11; // operador ternario

/* if ( horaActual >= horaApertura ) {
    mensaje = 'Está abierto'
} else {
    mensaje = `Está cerrado, hoy habrimos a las ${horaApertura}`;
} */

// horaActual >= horaApertura entonces dara verdadero sino falso
mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy habrimos a las ${horaApertura}`; // operador ternario

console.log({ horaApertura, mensaje });