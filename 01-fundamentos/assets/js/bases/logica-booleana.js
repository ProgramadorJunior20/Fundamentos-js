const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not a la negación');
console.log( true ); // devuelve true
console.log( !true ); // devuelve false
console.log( !false ); // devuelve true

console.log( !regresaFalse() ); // devuelve true

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // true

console.log('==========');
console.log( regresaFalse() && regresaTrue() ); // devuelve false
console.log( regresaTrue() && regresaFalse() ); // devuelve false

console.log('===== && =====');
/* regresaTrue() && regresaFalse(); */
regresaFalse() && regresaTrue();

console.log( '4 condiciones', true && true && true && false ); // false


console.warn('OR'); // para que esta condición funcione, por lo mendos un operador debe ser true
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );

console.log( '4 condiciones', true || true || true || false ); // true


console.warn('Asignaciones'); // Pro tip: Asignaciones con operadores

const soyUndefined = undefined;
const soyNull  = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true || true || false) ) {
    console.log('Es verdadero');
} else {
    console.log('Es falso');
}
