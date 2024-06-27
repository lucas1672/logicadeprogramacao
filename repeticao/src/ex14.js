import leia from "readline-sync"


var numero = leia.questionInt("digite o numero:");
var result = 1;
while(numero > 0){
  result = result * numero;
  numero--;
}
        console.log("fatorial de: " + result);





//         2) Faça um algoritmo que receba um número e ele calcule o fatorial desse número. O Fatorial, é
// o número vezes todos os valores multiplicados até 1