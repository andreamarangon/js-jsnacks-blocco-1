var somma = 0;

for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  somma = somma + numero;
}

document.getElementById('risultato').innerHTML = somma;
