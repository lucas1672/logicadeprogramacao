import leia, { questionInt } from "readline-sync"


var mes = questionInt("Informe o mes utilizando algarismo de 1 a 12 \n")

switch (mes){

  
    case 4:
    case 6:
    case 9:
    case 11:
        console.log (" Esse mes tem 30 dias")
        
    break;
    
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Esse mês tem 31 dias")
    break;

    default:
        console.log(" Esse mês tem 28 dias porém nos anos bisexto tem 29")
    break;






}