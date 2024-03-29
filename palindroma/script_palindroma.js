/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const wordInput = document.querySelector('input');
const clickBtn = document.getElementById('btn_palindroma_1');
const cancelBtn = document.getElementById('btn_palindroma_2');
const ticket = document.getElementById('ticket');

clickBtn.addEventListener('click', palindrome);
function palindrome() {
    let wordValue = wordInput.value.toLowerCase();
    if (wordValue === '') {
        return;
    }
    let word = wordValue.split("").reverse().join("");
    let message_1 = 'The word is a palindrome!';
    let message_2 = "The word isn't a palindrome!";
    if (wordValue === word) {
        ticket.innerHTML = `${message_1}`;
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