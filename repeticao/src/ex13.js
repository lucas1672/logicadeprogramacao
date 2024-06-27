import leia from "readline-sync"



var result = leia.questionInt("digite o numero:\n")
var numa = 0;
var numb = 1;
var numc = 0;
var fibonacci = "" 
fibonacci += numa + "" + numb;

for(var contador = 1;contador <= 5;contador ++ ){
numc = numa + numb;
fibonacci += "" + numc
numa = numb
numb = numc   

console.log(fibonacci)
}
// 1) Crie um algoritmo que receba um número e que ele mostre os números da sequência
// fibonacci. (Exemplo, se o usuário digitar 5, deve ser mostrado até o 5 número da sequência
// fibonacci). Lembrando que a sequência fibonacci, sempre é a soma dos dois números
// anteriores, começando sempre em 1 e 1; 1+1 = 2, 2+1 = 3, 3+2 =5.
