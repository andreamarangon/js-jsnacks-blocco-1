//creo un array vuota ove inserire le potenze
var potenze = [];

//creo var soldatino
var soldatino = false;

//creo ciclo e inserisco il cubo nell'array
for (var i = 0; i < 1000; i++) {
  var potenza = Math.pow(2 , i + 1);
  potenze.push(potenza);
  if (potenza >= 1000 ) {
    soldatino = true;
    break;
  }
}

//stampo del dom l'array
if (soldatino) {
  document.getElementById('risultato').innerHTML = potenze;
}
