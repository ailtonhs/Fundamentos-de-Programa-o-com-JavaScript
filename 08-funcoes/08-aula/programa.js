/*
function dizer_ola_pedro() {
    console.log("Olá Pedro");
    
}

function dizer_ola_carlos() {
    console.log("Olá Carlos");
    
}

function dizer_ola_luiz() {
    console.log("Olá Luiz");
    
}

dizer_ola_pedro();

dizer_ola_carlos();

dizer_ola_luiz();
*/

function dizer_ola(nome="Fulano") {
    console.log(`Olá ${nome}`);

    
}

dizer_ola("Pedro");
dizer_ola("Carlos");
dizer_ola("Luiz")
dizer_ola();

//---------------------------------------------------


function se_apresentar(nome, idade="?") {
    console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);
    
}

se_apresentar("Maria", 30)
se_apresentar("Bruno", 25)
se_apresentar("Miguel")

//------------------------------------------------

function criar_nome_completo(nome, sobrenome, sexo) {
    sexo = sexo.toUpperCase();
    if (sexo == "M") {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo == "F") {
        return `Sra. ${nome} ${sobrenome}`;
    } else {
        return `${nome} ${sobrenome}`;
    }
    
    
}

const nomeCompleto = criar_nome_completo("Pedro", "Silva", "M");

const nomeCompleto2 = criar_nome_completo("Maria", "Souza", "f");

console.log(nomeCompleto);
console.log(nomeCompleto2);

//-----------------------------------------------------------

//Funções Seta

const dizer_oi = () => console.log("oi");

dizer_oi();

//------------------------------------------

const dizer_oi_tudo_bem = () => {
    console.log("Oi!");
    console.log("Tudo bem?");
    
    
}
dizer_oi_tudo_bem();

//--------------------------------------------------

const somar = (x, y) => {
    return x + y;
}

const resultado = somar(10, 15);

console.log(resultado);








