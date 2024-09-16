/* Strings
- > strings é uma sequência de caracteres
*/

const nome = "Pedro";
const sobrenome = "Silva";

const idade = 27;

//Concatenação
const apresentacao = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos.";

//console.log(apresentacao);
//Template de string
const apresentacao2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

//console.log(apresentacao2);
//---------------------------------------------------

const s = "Olá Mundo";

//tamanho da string
console.log(s.length);

//transforma em letras maiúsculas
console.log(s.toUpperCase());

//transforma em letras minúscula
console.log(s.toLowerCase());

//
console.log(s.substring(0, 2));

console.log(s.split(""));








