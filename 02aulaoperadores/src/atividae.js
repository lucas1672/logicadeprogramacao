import leia from "readline-sync"




var produtos = leia.questionInt("valor produto");
var totalproduto = 0
if (produtos < 20){
    totalproduto =(produtos * 0.45);
    
    console.log("deve pagar R$" + totalproduto)

} else { totalproduto =(produtos * 0.30)
    console.log("deve pagar R$ "+ totalprodutos)
}