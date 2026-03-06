let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;

let resultadoAND = "#AND VOCÊ vai no shopping? ";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR VOCÊ vai no shopping? ";
resultadoOR+= temDinheiro || estaChovendo;
console.log(resultadoOR);