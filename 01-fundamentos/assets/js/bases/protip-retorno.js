
/* function createPersona( nombre, apellido ) {

    return{ nombre, apellido };

} */

const createPersona = ( nombre, apellido ) => ({ nombre, apellido });


const persona = createPersona( 'Jefferson', 'Murillo' );
console.log(persona);

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => { 
    /* console.log({ edad, args }); */
    return args;
}
 
const [ casado, edad2, dinero, hola, dev ] = imprimeArgumentos2(22, true, 23, 13.00, 'Hola', 'Dev');
console.log({ casado, edad2, dinero, hola, dev });

const { apellido: nuevoApellido } = createPersona( 'Jefferson', 'Murillo' );
console.log({ nuevoApellido });

/* const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}; */

/* const imprimePropiedades = ( personaje ) => {

    console.log('nombre', personaje.nombre);
    console.log('codeName', personaje.codeName);
    console.log('vivo', personaje.vivo);
    console.log('edad', personaje.edad);
    console.log('trajes', personaje.trajes);

} */

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    /* console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes }); */

    return { 
        nombre,
        codeName,
        vivo,
        edad,
        trajes,
    }

}

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    /* edad: 40, */
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

/* imprimePropiedades( tony ); */

const propiedades = imprimePropiedades( tony );
console.log({propiedades});
