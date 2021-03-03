//creo un array con i nomi degli invitati alla festa
var party = ["pippo", "pluto", "topolino"];

//chiedo all'utente il suo nome e la salvo in variabile
var nome = prompt("Qual è il tuo nome?");

//creo var soldatino
var soldatino = false;

//scorro array
for (var i = 0; i < party.length; i++) {
  if (party[i] == nome) {
    soldatino = true;
  }
}

//stampo risposta nel DOM nell'elemento con id risultato
if (soldatino) {
  document.getElementById('risultato').innerHTML = "Accesso consentito";
} else {
  document.getElementById('risultato').innerHTML = "Accesso negato";
}
