import leia from "readline-sync"

 var contador = 0;
do{
var num = leia.questionInt("digite um numero\n");
    if(num > 100 && num < 200){
        contador++;
    }
}while( num !== 0);
        console.log("foram digitado"+ contador + "entre 100 e 200")