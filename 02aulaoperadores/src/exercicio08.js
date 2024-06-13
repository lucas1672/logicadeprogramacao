import leia from"readline-sync";


var salario = leia.questionFloat("informe o salario:");
var emprestimo = leia.questionFloat("informe o valor do emprestimo:");
var parcela = leia.questionInt("numeros de parcelas:");
 var valorparcela = emprestimo/parcela;
 var limite = salario * 0.30;
 
 console.log("--------------------------")
 console.log("limite: r$" + limite.tofixed(2));
 console.log("valor emprestimo: r$" + emprestimo + "em" + parcela + "x")
 console.log("numero parcelas: r$ " + valorparcela)
 
 
 if(valorparcela <= limite){
   console.log("emprestimo aprovado") 
 }else{
    console.log("emprestimo reprovado")
 }
 

 // exemplo console.log((valorparcela)? "emprestimo aprovado:"emprestimo reprovado)"
 
