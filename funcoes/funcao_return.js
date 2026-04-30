function calcularTotal (preco1, preco2) {
    return preco1 + preco2;
}

let resultado = calcularTotal(30, 50); // somar

//  Desafio: Imprimir concatenanando e com template string

console.log("O total é: " + resultado); // Concatenando
console.log(`O total é: ${resultado}`); // Template string