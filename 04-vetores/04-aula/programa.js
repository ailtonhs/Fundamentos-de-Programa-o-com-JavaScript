//Vetores

const vetor = ["A", 10, "oi", 1.5, true];


const numeros = [ 1, 2, 3, 4, 5];

const frutas = ['maças', "larenjas", "peras", "uvas"]

//obter um valor
console.log(frutas[0]);
console.log(frutas[1]);

//adicionar um elemento
frutas[4] = "melancia";

console.log(frutas);

//alterar o valor de um elemento
frutas[1] = "limão";

console.log(frutas);

//adicionar um elemento no final do vetor
frutas.push("morangos")

console.log(frutas);

//adicionar elemento no inicio do vetor
frutas.unshift("mangas");
console.log(frutas);

//remover elementos no final
const fruta_removida = frutas.pop();
console.log(fruta_removida);

//remover elemento no inicio
const fruta_removida2 = frutas.shift()
console.log(fruta_removida2);

//saber o indice do elemento
console.log(frutas.indexOf("limao"));

//como verificar se a variável é um  vetor
console.log(Array.isArray(frutas))//true ou false

/*Vetores (Array)

Criando um vetor:
[1, 2, 3]
["a", "b", "c"]

Acessando um elemento:
vetor[indice]

Métodos de Vetores:
.push()
.unshift()
.pop()
.shift()
.indexOf()
*/




