

import leia from "readline-sync"

var decimal = leia.questionInt("DIGITE UM NUMERO INTEIROn\n");
var binario = "";

while(decimal > 0){
    var resultado = parseInt(decimal / 2);
    var resto = decimal % 2;
    binario = resto + binario;
    decimal = resultado;
}

console.log(binario)


// 3) Crie um algoritmo para realizar a conversão de um número inteiro decimal, para binário. Vale
// lembrar, que para realizar esse exercícios, vocês devem usar a técnica da divisão.