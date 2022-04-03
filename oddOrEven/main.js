/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


const oddOrEven = prompt('Scegli o pari o dispari:  es. [pari/dispari]')
const userNumber = Number(prompt('Scegli un numero compreso tra 1 e 5'))
const pcNumber = getRandomNumber(1, 5)


//Blocco l'utente se inserisce male i dati
let boolean = true

if (oddOrEven !== 'pari' && oddOrEven !== 'dispari'){
    alert('Scegli o pari o dispari:  es. [pari/dispari]')
    boolean = false
}

if (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    alert('Inserisci un numero compreso tra 1 e 5')
    boolean = false
} 



if (boolean){
    console.log(oddOrEven, userNumber, pcNumber);
    let sum = userNumber + pcNumber

    console.log(isEven(sum));

    if (oddOrEven == 'pari' && isEven(sum)){
        console.log('Hai vinto!');
    } else if (oddOrEven == 'dispari' && isEven(sum) === false){
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }
}


//Funzione per generare un numero casuale tra min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


//Funzione per capire se un numero è pari  
function isEven(number) {
    if (number % 2 == 0){
        return true
    } else {
        return false
    }
}


