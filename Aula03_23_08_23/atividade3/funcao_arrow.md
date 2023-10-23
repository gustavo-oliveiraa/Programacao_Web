// Função arrow que calcula o quadrado de um número
const calcularQuadrado = (numero) => numero * numero;

const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(calcularQuadrado);

console.log(quadrados);


Uma função arrow chamada calcularQuadrado é definida para calcular o quadrado de um número.
Um array chamado numeros contém os números a serem processados.
O método .map() é usado para aplicar a função calcularQuadrado a cada elemento do array numeros, gerando um novo array chamado quadrados.
O resultado final é exibido no console, mostrando os quadrados de cada número presente no array original.
Essa abordagem com funções arrow é uma maneira concisa e eficaz de aplicar uma operação a todos os elementos de um array, simplificando o código e tornando-o mais legível.
