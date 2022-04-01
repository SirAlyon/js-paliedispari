/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


const oddOrEven = prompt('Scegli o pari o dispari:  es. [pari/dispari]')
const userNumber = Number(prompt('Scegli un numero compreso tra 1 e 5'))

const pcNumber = getRandomNumber(1, 5)

console.log(oddOrEven, userNumber, getRandomNumber(1,5));

let sum = userNumber + pcNumber


console.log(isEven(sum));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
  
function isEven(number) {
    if (number % 2 == 0){
        return true
    } else {
        return false
    }
}

if (oddOrEven == 'pari' && isEven()){
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}