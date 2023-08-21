const matrizOriginal = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function calcularTransposta(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;
  const transposta = [];

  for (let i = 0; i < colunas; i++) {
    transposta[i] = [];
    for (let j = 0; j < linhas; j++) {
      transposta[i][j] = matriz[j][i];
    }
  }

  return transposta;
}

function imprimirMatriz(matriz, titulo) {
  console.log(titulo);
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
  }
  console.log('\n');
}

imprimirMatriz(matrizOriginal, 'Matriz Original:');

const matrizTransposta = calcularTransposta(matrizOriginal);
imprimirMatriz(matrizTransposta, 'Matriz Transposta:');
