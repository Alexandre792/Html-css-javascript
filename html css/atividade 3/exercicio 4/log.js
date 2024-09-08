let numero = parseInt(prompt("digite um numero para começar a contagem:"));

if (isNaN(numero)){
    console.log("entrada invalida. por gentileza, informe um numero.");
}else{
    for (let i = numero; i>= 0; i--){
        console.log(i);
    }
}