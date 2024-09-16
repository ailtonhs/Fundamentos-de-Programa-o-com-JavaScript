/*Eventos

.Clicar com o mouse sobre um elemento.

.Passar o ponteiro do mouse sobre um elemento.

.Pressionar uma tecla no teclado

.Redimensionar ou fechar a janela do navegador.

.Uma página web terminando de carregar.

.Enviar um formulário

.Um vídeo sendo reproduzido, interrompido, ou terminando sua reprodrução

.Um erro ocorrendo
*/

const botao = document.querySelector(".botao");

//botao.addEventListener("click", botaoFoiClicado);

/*function botaoFoiClicado(evento) {
    //preventDefautl() => previne um evento
    evento.preventDefault();
    console.log(botao);
    console.log(evento);

    document.getElementById("meu-formulario").style.background= "blue";

    document.querySelector("body").style.background= "green"
    
    document.getElementsByClassName("itens")[0].lastElementChild.innerHTML = "<h1>Texto alterado</h1>";
    
}*/

botao.addEventListener("click", (evento) => {
     //preventDefautl() => previne um evento
     evento.preventDefault();
     console.log(botao);
     console.log(evento);
 
     document.getElementById("meu-formulario").style.background= "blue";
 
     document.querySelector("body").style.background= "green"
     
     document.getElementsByClassName("itens")[0].lastElementChild.innerHTML = "<h1>Texto alterado</h1>";
});

const inputNome = document.querySelector("#nome");
inputNome.addEventListener("input", (e) => {
    document.querySelector(".container").append(inputNome.value);
    
});