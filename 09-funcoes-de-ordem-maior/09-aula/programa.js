/*Funções de Ordem Maior

.forEach()

.map()

.filter()

.reduce()

 */

//forEach()
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
    console.log(numero);
    
});



const letras = ["A", "B", "C", "D", "E"];

letras.forEach(function (letra, indice) {
    console.log(`${indice}: ${letra}`);
    
    
});


const tarefas = [
    {
        id: 1,
        texto: "Estudar",
        completo: false,
    },

    {
        id: 2,
        texto: "Trabalhar",
        completo: false,
    },

    {
        id: 3,
        texto: "Limpar a casa",
        completo: true,
    }
];

tarefas.forEach(function (tarefa, indice, minhaTarefas) {
    console.log(`${indice + 1}: ${tarefa.texto}`);
    console.log(minhaTarefas);
    
    
});



//.map()

const vetorDeTextosDasTarefas = tarefas.map(function (tarefa) {
    return `Tarefa ${tarefa.id}: ${tarefa.texto}`;
});

console.log(vetorDeTextosDasTarefas);


//.filter()

const tarefa1 = tarefas.filter(function (tarefa) {
    return tarefa.id === 1;
});

console.log(tarefa1);



//.reduce() 

const vetor = [1, 2, 3, 4];

const valorInicial = 0;

const soma = vetor.reduce(function (acumulador, elementoAtual) {
    return acumulador + elementoAtual
}, valorInicial);

console.log(soma);
