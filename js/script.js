const currentYear = 2023; 

const userName = prompt("Ciao Utente! Come ti chiami?");
console.log(userName);

const userSurname = prompt("Ciao Utente! Scrivi il tuo cognome?");
console.log(userSurname);

const userColor = prompt("Ciao Utente! Qual'è il tuo colore preferito?");
console.log(userColor);

const resultMessage = (`${userName} ${userSurname} ${userColor} ${21} `);
console.log(resultMessage);

document.getElementById ("result") .innerHTML = resultMessage;