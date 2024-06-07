import leia from "readline-sync"

var placa = leia.question("placa carro");

var ultimoalgoritmo = placa.charAt(placa.length-1);

console.log(ultimoalgoritmo)

switch(ultimoalgoritmo){
    case"0":
    case"1":
    console.log("não pode rodar na segunda-feira")
    break;
    case"2":
    case"3":
    console.log("não pode rodar na terça-feira")
    break;
    case"4":
    case"5":
    console.log(" não pode rodar na quarta-feira")
    break;
    case"6":
    case"5":

    console.log("não pode rodar na quinta-feira")
    break;
    case"8":
    case"9":
    
    console.log("não pode rodar na sexta-feira")
    break;
    
}



