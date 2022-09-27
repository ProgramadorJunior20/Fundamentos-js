

const carros = ['Ford', 'Mazda', 'Honda', 'Mercedez'];

let i = 0; // i Es mi variable de comtrol

/* while ( i < carros.length ) { // Esta ciclo se ejecutara de manera correcta, siempre que la condición sea verdadera
    console.log( carros[i] );
    // i = i + 1; 
    // i += 1; 
    i++;
}
 */
/* console.log( carros[10] ); */

console.warn('While');

while ( carros[i] ) { // Esta ciclo se ejecutara de manera correcta, siempre que la condición sea verdadera
    if ( i === 1) {
        i++;
        //break;
        continue;
    }

    console.log( carros[i] );
    i++;
}


console.warn('Do While');
let j = 0;

do{

    console.log( carros[j] );
    j++;

} while( carros[j] );