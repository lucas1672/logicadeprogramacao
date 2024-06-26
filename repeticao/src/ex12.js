import leia from "readline-sync"

var alturavalentina = 1.50;
var alturajoao = 1.40;
var anos = 0;
while(alturajoao <= alturavalentina){
    alturajoao += 0.03;
    alturavalentina += 0.02;
    anos++;

}
console.log("valentina:"+alturavalentina.toFixed(2))
console.log("joao:"+alturajoao.toFixed(2))
console.log("demora" + anos + "para joao maior que valentina")