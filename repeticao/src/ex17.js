import leia from "readline-sync"

var numeromagico;
var jogo = leia.keyInSelect(["PvP","PvE"]);
   
console.log("-------------------------\n")

if(jogo === 0){
    numeromagico = leia.questionInt("digite o numero magico:\n",{
        hideEchoBack:true
    });

}else if(jogo === 1 ){
    var dificuldade = leia.keyInSelect(["facil","media","dificil"]);
    switch(dificuldade){
        case 0:
        numeromagico = parseInt(Math.random() * 10);
        //facil
        break;
        case 1:
            numeromagico = parseInt(Math.random() * 10000)
        //medio
      break;
      case 2:
        numeromagico = parseInt(Math.random() * 100000)
      //dificil
     break;   
    }
}
    console.log(numeromagico);

        var tentativa = 0;
    do {
        var palpite = leia.questionInt("digite palpite:\n");
        if(palpite > numeromagico){
        console.log("numero magico e menor")
        }else if(palpite < numeromagico){
            console.log("numero magico maior")
        }else{
            console.log("acertou!")
        }
         tentativa++;
    } while(palpite !== numeromagico);
    console.log("voce precisou de " + tentativas + "tentativas para acertar")





















// 2) Vamos desenvolver um jogo pra gente se divertir um pouco com a criançada, trata-se do
// “Número mágico”. Neste jogo um número deve ser cadastrado pelo ‘mestre’ (PvP) ou sorteado
// pelo game (PvE) e o desafiante deve tentar adivinhar. A cada tentativa incorreta o sistema
// informa se o chute foi mais alto ou mais baixo que o número mágico. Quando o desafiante
// acertar o game informar em quantas tentativas ele conseguiu. No início do jogo o jogador
// escolhe entre PvP e PvE.
// - Sistema de dificuldade para o PvE, onde o jogador escolhe a dificultade e ela
// influencia o tamanho do range possível para o número mágico.
