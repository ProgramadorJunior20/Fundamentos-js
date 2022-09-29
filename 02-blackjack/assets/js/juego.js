/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spedes
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

// Esta function crea una nueva baraja
const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ){
        for( let tipo of tipos ){
            deck.push( i + tipo );
        }
    }

    for( let tipo of tipos ){
        for( let esp of especiales ){
            deck.push( esp + tipo );
        }
    }

    /* console.log( deck ); */
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}

crearDeck();

// Esta función me permite tomar una nueva carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck'
    }

    const carta = deck.pop(); // deck.pop() devuelve la carta en la ultima posición del array

    console.log( deck );
    console.log( carta ); // carta debe ser de la baraja 

    return carta;
}

//pedirCarta();

// Esta función me permite saber cual va a hacer el valor de carta
const valorCarta = () => {

}

