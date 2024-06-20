import leia from 'readline-sync';
var timea = leia.questionInt("informe gtd gals time a");
var timeb = leia.questionInt("informe qtd gols time b");
 var diferenca = Math.abs(timea - timeb);
 switch(diferenca){
    case 0:
        console.log("empate")
        break;
        case 1:
            case 2 :
                case 3:
    console.log("jogo normal");
     break;
    default:
                        console.log("goleada")
 }