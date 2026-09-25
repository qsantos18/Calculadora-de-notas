function calcularMedia()
    const textoNotal = document.getElementById("nota1"). value;
    const textoNota2 = document.getElementById("nota2"). value;
    const textoNota3 = document.getElementById("nota3"). value;

const nota1 = Number(textoNotal);
const nota2 = Number(textoNota2);
const nota3 = Number(textoNota3);

const media = (nota1 + nota2 + nota3) / 3;

let situacao;

if (media >= 7){
    situacao = "APROVADO";
}
if (media >= 5){
    situacao = "REPROVADO";
}
