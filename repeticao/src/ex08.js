import leia from"readline-sync"

var numero = leia.questionInt("digite o numero");
 for(var i = 1; i<=10; i++){
    var result = i * numero;
    console.log(i +"x"+numero+"="+result)
 }