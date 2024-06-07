
//import leia from "readline-sync"
/*var senha = leia.quastionint ("digite senha");
if (senha === 1234){
    console.log("acesso permitido")

}else{


console.log("acesso negado")

}*/
 import leia from "readline-sync"
 var senha = leia.question("digite numero")
switch(senha){
    case "1234":
        console.log("permitir acesso")
break;
default:
    console.log("acesso negado");

    }
