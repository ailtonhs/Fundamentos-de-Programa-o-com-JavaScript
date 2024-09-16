const ul = document.querySelector(".itens");

console.log(ul);


//Remover um elemento
//ul.remove();

//Remover o  último elemento filho da ul
//ul.lastElementChild.remove()

//Definir o conteúdo de texto de um elemento
ul.firstElementChild.textContent = 'Olá';
ul.children[1].innerText = "<h1>Oi</h1>";

//Definir o HTML interno de um elemento
ul.lastElementChild.innerHTML = "<h1>Olá, Mundo!</h1>";

const botao = document.querySelector(".botao");
//Alterar o estilo de um elemento de forma dinâmica
botao.style.background = "red";


/*Manipulação do DOM

.remove()
.lastElementChild => seleciona o último elemento filho

.firstElementChild => selecionar o primeiro elemento filho

.children => retorna a lista de elemento filho

.textContente => Acessar o conteúdo de texto

.innerText => Acessar o conteúdo de texto

.innerHTML => Definir de forma dinâmica conteúdo HTML

.style => Definir estilo de elementos
*/



