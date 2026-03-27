// Verificador de desconto
let produto1 = 65;
let produto2 = 56
let valorTotal = produto1 + produto2;

const mensagem1 = valorTotal <100? "o valor total do seu carrinho é " + valorTotal : "o valor total do seu carrinho com desconto é"  + (valorTotal - (valorTotal * 0.10))
console.log (mensagem1)