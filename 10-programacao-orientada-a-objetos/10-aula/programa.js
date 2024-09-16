// const nome = "Pedro";

// const sobrenome = "Silva";

// const dataDeNascimento = "02/01/1990";

const pessoaA = {
    nome: "Pedro",
    sobrenome: "Silva",
    dataDeNascimento: new Date("8-2-90"),

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },

    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.dataDeNascimento.getFullYear());

console.log(pessoaA.obterNomeCompleto());

console.log(pessoaA.obterAnoNascimento());

//------------------------------------------

const pessoaB = {
    nome: "Luiz",
    sobrenome: "Souza",
    dataDeNascimento: new Date("1-1-99"),

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },

    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

console.log(pessoaB.nome);
console.log(pessoaB.sobrenome);
console.log(pessoaB.obterNomeCompleto());
console.log(pessoaB.obterAnoNascimento());

//Função construtora
function Pessoa(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);

    this.amigos = [];

    this.obterAnoNascimento = () => {
        return this.dataDeNascimento.getFullYear();
    }

    this.adicionarAmigo =  (amigo) => {
        if (!this.amigos.includes(this.amigo)) {
            this.amigos.push(amigo);
            amigo.amigos.push(this);
        }
        
    };
    this.selecionarAmigos = () => {
        return this.amigos.map((amigo) =>  amigo.obterNomeCompleto());
    };

    //maneira de definir metodos extras em uma função construtora caso tenha sido escrita por outra pessoa
    Pessoa.prototype.obterNomeCompleto =  () => {
        return `${this.nome} ${this.sobrenome}`;
    }
}

//maneira de definir metodos extras em uma função construtora caso tenha sido escrita por outra pessoa


const pessoa1 = new Pessoa("João", "Silva", "7-8-80");
const pessoa2 = new Pessoa("Maria", "Santos", "8-2-90");

const pessoa3 = new Pessoa("Carlos", "Pereira", "5-2-95")
console.log(pessoa1);

console.log(pessoa2);

console.log(pessoa1.obterAnoNascimento());

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log(pessoa2.obterNomeCompleto());

pessoa1.adicionarAmigo(pessoa2);
//console.log(pessoa1);

pessoa1.adicionarAmigo(pessoa3);


console.log(`Amigo do ${pessoa1.nome}: `, pessoa1.selecionarAmigos());
console.log(`Amigo do ${pessoa2.nome}: `, pessoa2.selecionarAmigos());
console.log(`Amigo do ${pessoa3.nome}: `, pessoa3.selecionarAmigos());

//------------------------------------------

//construtores internos

const nome2 = new String("Pedro");

console.log(typeof nome2);

console.log(typeof "Pedro");


const numeros = new Number(5);
console.log(typeof numeros);
console.log(typeof 5);

/**
 * Programação Orientada a Objetos
    
Definir um objeto:

function objeto(argumento1, argumento2) {
    this.propriedade1 = argumento1;
    this.propriedade2 = argumento2;
}

Definindo um método de um objeto:

objeto.prototype.nomeDoMetodo = fuction () {
    //Bloco de código a ser executado
}

Instanciamento um objto:
const objeto1 = new Objeto("abs", "123");

Acessando uma propriedade de um objeto:
objeto1.propriedade1;

Chamando um método do objeto:
objeto1.nomeDometodo()
 */


















