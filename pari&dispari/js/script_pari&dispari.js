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
const ticket = document.getElementById('ticket');

clickBtn.addEventListener('click', randomGame);
function randomGame() {
    let userNum = parseInt(evenOrOdd.value);
    let computerNum = getRndInteger(1, 5);
    let sum = userNum + computerNum;
    let message_1 = 'Computer:';
    computerTicket.innerHTML = `${message_1} ${computerNum}`;
    let message_2 = 'Sum:';
    sumTicket.innerHTML = `${message_2} ${sum}`;
    if ((sum % 2 === 0) && (userNum % 2 === 0)) {
        let message_3 = 'You win!';
        ticket.innerHTML = `${message_3}`;
    } else {
        let message_4 = 'You lost!';
        ticket.innerHTML = `${message_4}`;
    }
}