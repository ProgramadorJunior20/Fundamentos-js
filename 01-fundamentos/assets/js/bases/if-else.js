

let a = 5;

if ( a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

/* console.log('Fin de programa'); */

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

if ( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1) {
    console.log('Lunes');
    /* if ( dia === 1) { Condiciones anidadas
        console.log('Hoy es lunes');
    } else {
        
        if ( dia === 2 ) {
            console.log('Hoy es martes');
        } else {
            console.log('No es ni domingo ni lunes ni martes');
        }

    }
 */
} else if ( dia === 2) {
    console.log('Martes');
} else if ( dia === 3) {
    console.log('Miercoles');
} else if ( dia === 4) {
    console.log('Jueves');
} else if ( dia === 5 ) {
    console.log('Viernes');
} else if ( dia === 6 ) {
    console.log('Sabado');
} else {
    console.log('No es ni Lunes, Martes, Miercoles, Jueves, Viernes, Sabado o Domingo');
}

// Sin usar if else, o Switch, unicamente objetos, imprimir por consola dias de la semana

dia = 1;

if ( dia > 6){
    throw 'Dia no valido exede el limite de array/Object';
}

const diaSemana = { 
    0: 'Domingo',
    1: 'Lunes', 
    2: 'Martes' ,
    3: 'Miércoles', 
    4: 'Jueves', 
    5: 'Viernes', 
    6: 'Sabado',
};

const diaSemana2 = ['Domingo', 'Lunes', 'Martes' , 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];


// Dia de la semana
console.log(diaSemana2[dia] || 'Dia no valido');