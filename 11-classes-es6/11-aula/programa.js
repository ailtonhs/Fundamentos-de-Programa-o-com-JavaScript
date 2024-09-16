//Funcao construtora
/*
function Pessoa(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);

    this.obterNomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`;
    }
}
*/

//Classe ES6
class Pessoa {
    constructor(nome, sobrenome, dataDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = new Date(dataDeNascimento);
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa1 = new Pessoa("João", "Silva", "7-7-99");

console.log(pessoa1);
console.log(pessoa1.obterNomeCompleto());

class Cliente extends Pessoa {
    constructor(nome, sobrenome, dataDeNascimento, saldo) {
        super(nome, sobrenome, dataDeNascimento);
        this.saldo = saldo;
    }
}

const cliente1 = new Cliente("Pedro", "Souza", "1-1-90", 1000);


console.log(cliente1);

console.log(cliente1.nome);
console.log(cliente1.sobrenome);
console.log(cliente1.dataDeNascimento);
console.log(cliente1.saldo);

console.log(cliente1.obterNomeCompleto());



/*Classes ES6

Definindo uma classe:

class nomeDaClasse {
constructor(argumento1, argumento2) {
    this.propriedade1 = argumento1;
    this.propriedade2 = argumento2;
}
    metodo1() {
    //Bloco de código a ser executado
    }
}
 */

