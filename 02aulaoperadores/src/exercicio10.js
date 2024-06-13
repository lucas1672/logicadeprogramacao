import leia, { questionInt } from "readline-sync"
var nome = leia.question("infomr seu nome:"); 
var salario = leia.questionFloat("informe o salario");
var deps = leia = questionInt("informe qtd dependentes:");

if(deps === 0){
    var total = salario * 1.02;
    console.log(nome + "seu salario e: R$" + total.tofixed(2));
}else if (deps ===1){
    
}