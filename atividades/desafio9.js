// desenvolva uma função que receba nome e hora atual.

function saudacao(nome, horario){
    if(horario >= 0 && horario<= 11){
        console.log(`bom dia ${nome}`);
    }
    else if(horario >= 12 && horario <= 17){
        console.log(`boa tarde ${nome}`);
    }
    else if (horario>= 18 && horario <= 23){
        console.log(`boa noite ${nome}`);
    }
}
let nome = "zoio";
let horario = 22;
saudacao(nome, horario);