//exemplo
let nome = "Alexandre";       
let idade = 20;
let altura = 1.78;
let ativo = true;

if (idade >=20){
    console.log("maior de idade"+idade);
}else{
    console.log("menor de idade: "+idade);
}
console.log(nome);



//exemplo
let diaSemana = 1;
let nomeDoDia;

switch(diaSemana){
    case 1:
        nomeDoDia ="Domingo"
        break;
    case 2:
        nomeDoDia ="segunda-feira"
        break;
    case 3:
        nomeDoDia ="terça-feira"
        break;
    case 4:
        nomeDoDia ="quarta-feira"
        break;
    default:
        nomeDoDia ="dia invalido"
        break;

    console.log("hoje é:"nomeDoDia);



//laços de repetições

    let contador = 1;

    while(contador <=5){
        console.log(contador);
        contador++;
    }
 
    let contador = 1;

    do {
        console.log(contador);
        contador++;
    }while(contador <= 5);




    for(let i=1; i<=5; i++){
        console.log(i);
    }



//exemplo de mostrar array
let frutas = ["maçã", "banana", "laranja"];
let nomes = new Array("Alexandre","Jota")

for(let i=0; i<3; i++){
    console.log("fruta: "+frutas[i]);
}


//mostrar o conteudo do array fruta
let frutas = ["maçã", "banana", "laranja"];
let nomes = new Array("Alexandre","Jota")

    frutas.forEach(name => console.log(name));