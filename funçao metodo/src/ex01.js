import leia from "readline-sync" 
function  mostrarTudo(){
    var nome =leia.question("digite o nome:\n")
   console.log("-----------------------")
    console.log("ola " + nome)
}


function somar(n1,n2){
    var resultado = n1 + n2;
    console.log("o resultado é :\n" + resultado)

}
    console.log("=======================")
    var n1 = leia.questionInt("digite o numero:\n")
    var n2 = leia.questionInt("digite o segundo numero:\n")

function subtrair(n1,n2){
    var resultado = n1 - n2
    console.log("o resultado e " + resultado)
}

function multi(n1,n2){
var resultado = n1 * n2;
    return resultado;
}

somar()
subtrair()
mostrarTudo();
multi(1)