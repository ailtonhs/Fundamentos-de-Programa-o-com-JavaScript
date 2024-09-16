//document.getElementById
//document.getElementByTagName
//document.getElementsByClassName
//document.querySelector
//document.querySeLectorAll


console.log(document.getElementById("meu-formulario"));

console.log(document.getElementsByTagName("li"));

console.log(document.getElementsByClassName("item"));

console.log(document.querySelector("li"));

console.log(document.querySelectorAll("#meu-formulario"))
// itens = document.querySelectorAll(".item");

const itens = document.querySelectorAll(".item");

itens.forEach((item) => console.log(item));






