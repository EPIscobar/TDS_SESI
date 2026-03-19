               // 0 1  2  3  4  5
const numeros = [1, 2, 3, 4, 5, 8];

// adicionar elementos
numeros[0] = 100;
numeros.push(20); // adiciona no final do array
console.log(numeros);

console.log(numeros.indexOf(5)); // retorna o índice do elemento 
console.log(numeros.includes(20)); // retorna true ou false se o elemento existe ou não
console.log(numeros.includes(6)); // retorna true ou false se o elemento existe ou não
console.log(numeros.join(" -")); // une os elementos do array em uma string

const valores = [200, 300, 400];
console.log(numeros.concat(valores)); // concatena dois arrays