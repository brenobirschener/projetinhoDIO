//projeto 2 da DIO
// Calculadora de Partidas Rankeadas

let rankFinal = rank(200,5)

console.log("The player have " + rankFinal + " points" )

if(rankFinal <= 10){
        
    console.log("Player level: Ferro")
} else if((rankFinal > 10) && (rankFinal <= 20)){
    console.log("Player level: Bronze")
} else if((rankFinal > 20) && (rankFinal <= 50)){
    console.log("Player level: Prata")
} else if((rankFinal > 50) && (rankFinal <= 80)){
    console.log("Player level: Ouro")
} else if((rankFinal > 80) && (rankFinal <= 90)){
    console.log("Player level: Diamante")
} else if((rankFinal > 90) && (rankFinal <= 100)){
    console.log("Player level: Lendário")
} else {
    console.log("Player level: Imortal")
}


function rank(numWin, numLose){

    let rankPlayer = numWin - numLose
        return rankPlayer
}
