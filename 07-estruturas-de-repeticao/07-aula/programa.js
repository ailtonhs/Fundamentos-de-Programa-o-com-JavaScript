// let i = 0;

// while (i < 3) {
//     console.log('miau');
//     i += 1;  
// }

//-----------------------------------------------------

/*
for (let i = 0; i < 10; i++) {
    console.log(`Número da repetição for: ${i}`);
    
}
*/

const tarefas = [
    {
        id: 1,
        texto: 'Tirar o lixo',
        completo: false,
    },

    {
        id: 2,
        texto: "Jantar com esposa",
        completo: false,
    },

    {
        id: 3,
        texto: "Reunião com chefe",
        completo: true,
    },
];

for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefas ${i + 1}: ${tarefas[i].texto}`);
    
};
//--------------------------------------------------

for (let tarefa of tarefas) {
    console.log(tarefa.texto);
    
}


/* Estruturas de Repetição

Repetição "enqunato" (while):

while (condição) {
    //Bloco de código a ser executado
}

Repetição "para" (for):

for (inicialização; condição; incremento) {
    //Bloco de código a ser executado
}

*/

