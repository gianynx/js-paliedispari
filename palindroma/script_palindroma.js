/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const wordInput = document.querySelector('input');

const clickBtn = document.getElementById('btn_palindroma_1');
const cancelBtn = document.getElementById('btn_palindroma_2');

const ticket = document.getElementById('ticket');

clickBtn.addEventListener('click', palindroma);
function palindroma() {
    let wordValue = wordInput.value.toLowerCase();
    if (wordValue === '') {
        return; // Exit the function if the input is empty
    }
    let word = wordValue.split("").reverse().join("");
    let message = 'The word is a palindrome!';
    let message_2 = "The word isn't a palindrome!";
    if (wordValue === word) {
        ticket.innerHTML = `${message}`;
        ticket.classList.remove ("d-none");
    } else {
        ticket.innerHTML = `${message_2}`;
        ticket.classList.remove("d-none");
    }
}

cancelBtn.addEventListener('click', reset);
function reset() {
    wordInput.value = '';
    ticket.classList.add ("d-none");
}