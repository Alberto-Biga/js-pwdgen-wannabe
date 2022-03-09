const name = prompt ("Ciao! Come ti chiami?");
console.log(name)

const surname = prompt ("Qual è il tuo cognome?");
console.log(surname)

const color = prompt ("Per favore, confidami ancora qual è il tuo colore preferito..");
console.log(color)

const password = name + surname + color;
console.log(password)

document.getElementById("target").innerHTML =  "La tua nuova password è : " + password + 21;