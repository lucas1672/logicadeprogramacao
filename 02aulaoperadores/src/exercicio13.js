import leia from "readline-sync";
 var idade = leia.questionInt("informe sua idade");
 if (idade < 18 ){
    var permissao = leia.question("seus pais permitiram a viagem\n1-sim\n2-nao")
    if (permissao === "1"){
        var nome = leia.question("informe seu nome:")
        console.log("voce pode viajar tranquilo"+ nome);
         }else if(permissao === "2"){

            console.log("nao tem permissao para viajar");

         }else{
            console.log("opcao invalida");

         }else {
                var nome = leia.question("infome seu nome:");
                console.log("voce pode viajar tranquilo" + nome);

         
 }
}