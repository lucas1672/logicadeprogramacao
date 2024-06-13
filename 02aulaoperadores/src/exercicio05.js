import leia, { questionInt } from "readline-sync"


var salario = questionInt(" Infome o valor do salario \n")

var valorem = questionInt(" Infome o valor do emprestimo \n")

var par = questionInt(" Infome a quantidade de parcelas \n")

var valorparcela = ( valorem / par)

var valormargem = (salario*100)/30

var mensagem = valormargem <= valorparcela ? " Seu emprestimo foi aprovado" : "O valor da parcela ultrapassa a margem do emprestimo"

console.log (mensagem)

