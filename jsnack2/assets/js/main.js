//chiedo ad utente di inserire il primo numero
var primoparola = prompt("Inserisci una parola");

//chiedo ad utente di inserire il primo numero
var secondoparola = prompt("Inserisci un'altra parola");


if (primoparola.length > secondoparola.length) {
  document.getElementById('risultato').innerHTML = secondoparola + " " + primoparola;
} else if (primoparola.length < secondoparola.length) {
  document.getElementById('risultato').innerHTML = primoparola + " " + secondoparola;
} else {
  document.getElementById('risultato').innerHTML = "le due parole hanno la stessa lunghezza";
}
