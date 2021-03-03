//creo un array vuota ove inserire i cubi
var cubi = [];

//chiedo all'utente un numero
var numero = parseInt(prompt("Dimmi per quante volte devo calcolare il cubo"));

//creo ciclo e inserisco il cubo nell'array
for (var i = 1; i < numero + 1; i++) {
  var cubo = i * i * i;
  cubi.push(cubo);
}

//stampo del dom l'array con il cubo dei numeri
document.getElementById('risultato').innerHTML = cubi;
