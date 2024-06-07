import leia from "readline-sync"

var nprodutos = leia.questionFloat("quantidade maça")
var totalproduto = 0
if (nprodutos < 12){
    totalproduto =(nprodutos * 0.30)
    
    console.log("deve pagar R$" + totalproduto)

} else { totalproduto =(nprodutos * 0.25)
    console.log("deve pagar R$ "+ totalprodutos)
}