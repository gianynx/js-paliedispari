/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const evenOrOdd = document.getElementById('evenOrOdd');
const clickBtn = document.querySelector('button');
const computerTicket = document.getElementById('computerTicket');
const sumTicket = document.getElementById('sumTicket');

clickBtn.addEventListener('click', getRndInteger);
function getRndInteger(min, max) {
    let userNum = evenOrOdd.value;
    userNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    let computerNum = getRndInteger(1, 5);
    let message_1 = 'Computer:';
    computerTicket.innerHTML = `${message_1} ${computerNum}`;
    let sum = userNum + computerNum;
    let message_2 = 'Sum:';
    sumTicket.innerHTML = `${message_2} ${sum}`;
    function evenNum() {
        if (sum % 2 === 0) {
            return true;
        }
        return false;
    }
    let even = evenNum(sum);
    if ((userNum === even) && (sum === even) || (userNum !== even) && (sum !== even)) {
        const ticket = document.getElementById('ticket');
        let message_1 = 'You win!';
        ticket.innerHTML = `${message_1}`;
    } else if ((computerNum === even) && (sum === even) || (computerNum !== even) && (sum !== even)) {
        let message_2 = 'You lost!';
        ticket.innerHTML = `${message_2}`;
    }
}
