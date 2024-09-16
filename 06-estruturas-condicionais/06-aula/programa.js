const x = 30;
const y = 10;
/*
if (x == y) {
    console.log("x é igual a y");
    
} else {
    console.log("x não é igual a y");
    
}
 */

if (x < y) {
    console.log("x é menor que y");
    
} else if (x > y) {
    console.log("x é maior que y");
    
} else {
    console.log("x e y são iguais");
    
}

//---------------------------------------------------


const cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("A cor é vermelha");
        break;

    case "verde":
        console.log("A cor é verde");
        break;

    case "azul":
        console.log("A cor é azul");
        break;

    default:
        console.log("A cor não é vermelha nem é verde e nem azul");
        
        
}

const contador = 5;

switch (contador) {
    case 5:
        console.log("5");

    case 4:
        console.log("4");

    case 3:
        console.log("3");

    case 2:
        console.log("2");

    case 1:
        console.log("1");

    default:
        console.log("BOOOOMMM!");  
        
}

const sexo = "M";

switch (sexo) {
    case "M":
    case "m":
        console.log("Masculino");
        break;

    case "F":
    case "f":
        console.log("Feminino");
        break;

    default:
        console.log("Inválido");
            
}

//---------------------------------------------

// let numero;

// if (cor == "vermelho") {
//     numero = 10;
// } else {
//     numero = 20;
// }

//Operador ternário
let numero = cor == "vermelho" ? 10 : 20;

console.log(numero);

/*Estruturas Condicionais

.if, else , else if

.switch

.?: operador ternário
 */

