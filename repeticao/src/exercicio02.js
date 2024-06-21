import leia from "readline-sync";
var numero = leia.questionInt("digite o numero:")

while(numero >= 0){
    console.log(numero);
    numero--;
}