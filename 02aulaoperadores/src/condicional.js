 //if/else


 var numero = 2;

 if (numero > 0 ){
     console.log("numero positivo")
  } else if(numero < 1){
    console.log("numero negativo")

    }else{

    
        console.log("numero e zero")
    }

 var x =10;
    if(x<100){
        console.log("menor que cem");
    }
    if(x<1000){
        console.log("menor que mil");
    }
     
    switch (2){
        case 1 :
        console.log("domingo")
     break;
     case 2 :
        break;
         default:
         console.log("nao")
         break;
    
    import leia from "readline-sync"
 var codigoerro = leia.questionInt("digite o codigo do erro");
 switch(codigoerro){
        case 400:
    
    
        console.log("http code erro aplicaçao")
        break;
        case 500:
        
        
            console.log("http code - erro de servidor")
            break;
            default:
                console.log("nao e erro")
                break;    
    }
