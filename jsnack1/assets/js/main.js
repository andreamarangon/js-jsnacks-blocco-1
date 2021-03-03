//chiedo ad utente di inserire il primo numero
var primonumero = prompt("Inserisci un numero");

//chiedo ad utente di inserire il primo numero
var secondonumero = prompt("Inserisci un'altro numero");


if (primonumero > secondonumero) {
  document.getElementById('risultato').innerHTML = primonumero;
} else if (primonumero < secondonumero) {
  document.getElementById('risultato').innerHTML = secondonumero;
} else {
  document.getElementById('risultato').innerHTML = "i numeri sono uguali";
}
