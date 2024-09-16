const nome = "Pedro";
const sobrenome = "Silva";
const idade = 18;
const pasatempos = ["música", "filmes"];
const enderecoRua = "Avenida dos Cravos";
const enderecoCidade = "Vitória";
const enderecoEstado = "ES";

const pessoa = {
    nome: "Pedro",
    sobrenome: "Silva",
    idade: 18,
    pasatempos: ["música", "filmes", "esporte"],

    endereco: {
        rua: "Avenida dos Cravos",
        cidade: "Vitória",
        estado: "ES"
    }
}
//acessar uma propriedade
console.log(pessoa.nome);

//acessar um elemento de uma proprieade vetor
console.log(pessoa.pasatempos[2]);

//acessar uma propriedade de uma propriedade
console.log(pessoa.endereco.cidade);

//definir uma nova proprieade
pessoa.email = "pedro@gmail.com";

console.log(pessoa);

// -----------------------------------------------------

//criar um vetor de objetos
const tarefas = [
    {
        id: 1,
        texto: "Tirar o lixo",
        completo: false
    },

    {
        id: 2,
        texto: "Varrer o chão",
        completo: true
    },

    {
        id: 3,
        texto: "Lavar o carro",
        completo: false
    }
];

//acessar uma proprieade de um elemento especifico
console.log(tarefas[1].texto);

//formatar um objeto em formato JSON
console.log(JSON.stringify(tarefas));

console.log(JSON.stringify(pessoa));

/*Objetos

Criando um objeto:

objeto = {
    propriedade1: "A",
    proprieade2: ["B", "C", "D"],
    propriedade3: {
        x: "1",
        y: "2"
    }
}
-------------------------------

Acessando uma propriedade de um objetos:

objeto.propriedade
------------------------------

Formatando objeto como string JSON:

JSON.stringfy(objeto)
*/






