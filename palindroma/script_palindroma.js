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
    let word = wordValue.split("").reverse().join("");
    if (wordValue === word) {
        ticket.innerHTML = `<h1>The word is a palindrome!</h1>`;
        ticket.classList.remove ("d-none");
    } else {
        ticket.classList.remove("d-none");
    }
}

cancelBtn.addEventListener('click', reset);
function reset() {
    wordInput.value = '';
    ticket.classList.toggle ("d-none");
}