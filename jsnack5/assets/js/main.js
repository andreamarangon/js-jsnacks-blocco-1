//creo un array vuoto
var empty = [];

//chiedo all'utente un numero 6 volte e la salvo in variabile
for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  if (numero % 2) {
    empty.push(numero);
  }
}
//stampo del dom l'array con i numeri dispari
document.getElementById('risultato').innerHTML = empty;
