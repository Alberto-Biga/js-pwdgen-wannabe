const name = prompt ("Ciao! Come ti chiami?");
console.log(name)

const surname = prompt ("Qual è il tuo cognome?");
console.log(surname)

const colour = prompt ("Per favore, confidami ancora qual è il tuo colore preferito..");
console.log(colour)

const password = name + surname + colour;
console.log(password)

document.getElementById("target").innerHTML =  "La tua nuova password è : " + password + 21;