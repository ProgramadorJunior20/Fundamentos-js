
function saludar( nombre ) { // function tradisional
    /* console.log( arguments ); */
    /* console.log('Hola ' + nombre); */
    return 10;

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después de return');
}

const saludar2 = function( nombre ) { // function anonima
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => { // function de flechas
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => { // function de flechas
    console.log( 'Hola ' + nombre );
}



const retornoDaSaludar = saludar( 'Jefferson', 40, true, 'Costa Rica' );
/* console.log( retornoDaSaludar ); */
/* saludar2( 'Jefferson' ); */

/* saludarFlecha();
saludarFlecha2('Jeff'); */

function sumar(a, b) {
    return a + b;
};

/* const sumar2 = (a,b) => {
    return a + b;
}; */

const sumar2 = (a,b) => a + b;
/* console.log( sumar2(2,2) ); */

function getAleatorio() {
    return Math.random();
}
/* console.log( getAleatorio() ); */

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );