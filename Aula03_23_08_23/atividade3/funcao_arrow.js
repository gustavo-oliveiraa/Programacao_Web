// Função arrow que calcula o quadrado de um número
const calcularQuadrado = (numero) => numero * numero;

const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(calcularQuadrado);

console.log(quadrados);
