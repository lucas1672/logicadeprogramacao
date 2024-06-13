import lea, { questionFloat } from "readline-sync"

var doacao = leia .questionFloat("para doar 10,00 digite 1 \n para doar 25,00 digite 2 \n para doar 50,00 digite 3 \n para doar outros valores digite 4 ")
switch(doacao){
    case 1: var valor = 10,00

    console.log("agradecemos pela doacao r$"+ valor)
    break;

    case 2: var valor = 25,00

    console.log("agradecemos pela doacao r$"+ valor)
    break;

    case 3: var valor = 50,00

    console.log("agradecemos pela doacao r$"+ valor)
    break;

    case 4: var valor = questionFloat("digite o lalor deseja doar \n ")

    console.log("agradecemos pela doacao r$"+ valor)
    break;
    default: console.log("digite a opcao valida")
    break;
}