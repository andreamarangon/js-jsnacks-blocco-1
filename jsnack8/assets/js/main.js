var numero = prompt("Dammi un numero");
console.log(numero);

var somma = 0;
for (var i = 0; i < numero.length; i++) {
  var numeropars = parseInt(numero[i]);
  if (!isNaN(numeropars)) {
    somma += parseInt(numero[i]);
  }
}

console.log(somma);


document.getElementById('risultato').innerHTML = somma;
