/* Chiedere all’utente di inserire una parola Creare una funzione 
per capire se la parola inserita è palindroma */

const userString = prompt('Inserisci una parola per verificare che sia palindroma:')


 isPalindrome(userString)

function isPalindrome(string) {
    let stringReverse = string.split("").reverse().join("");
    if (stringReverse == string){
        console.log('The word is palindrome');
    } else {
        console.log('The word is not palindrome');
    }
} 
 
/* const userStringArray = userString.split("")

console.log(userStringArray);

const userStringReverseArray = userStringArray.reverse() 

console.log(userStringReverseArray);

const userStringReverse = userStringReverseArray.join("")

console.log(userStringReverse);

if (userString == userStringReverse){
    console.log('The word is palindrome');
} else {
    console.log('The word is not palindrome');
} */

 