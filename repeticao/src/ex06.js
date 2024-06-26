import leia from "readline-sync"


var menor;
var maior;

for(var i = 0;i < 5; i++){
     var num = leia.questionInt("digite o numero:");
    if(i === 0){
        menor = num;
        maior = num;

    }    
     
     if(num < menor){
            menor = num;
        }
            if(num > maior){
                maior = num;
            
        }
}
console.log("maio:"+ maior);
console.log("menor"+menor);