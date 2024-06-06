import leia from"readline-sync"


var num1 = leia.questionFloat("valor primeira" )

var num2 = leia.questionFloat("valor segundo" )

var num3 = leia.questionFloat("valor terceiro" )

var num4 = leia.questionFloat("valor quarto" )

var num5 = leia.questionFloat("valor quinto" )


var valorbruto = num1 + num2 + num3 + num4 + num5;
var valorliquido = valorbruto - (valorbruto * 0.25);

console.log("valor liquido:r$" + valorliquido)