/*
Atalho comentario de varias linhas:
alt + shift + a

Desafio: 
Criar uma função que receba preço e desconto em %
e mostre o valor final com desconto.
Criar outra função que receba preço e quantidade
e mostre o valor da compra. 

*/

function calcularDesconto(Preco, desconto) {
    const valorFinal = Preco - (Preco * (desconto / 100));
    console.log(`O valor final com desconto é: ${valorFinal}`);
}

calcularDesconto(1000, 5);

function calcularTotal(preco, quantidade) {
    const valorTotal = preco * quantidade;
    console.log(`O valor total da compra é: ${valorTotal}`);
}

calcularTotal(100, 12);


