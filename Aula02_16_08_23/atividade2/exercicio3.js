function multiplyMatrices(matrixA, matrixB) {
  // Verifique se o número de colunas da primeira matriz é igual ao número de linhas da segunda matriz
  if (matrixA[0].length !== matrixB.length) {
    return "Não é possível calcular";
  }

  const result = [];
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}

// Exemplo de uso
const matrixA = [
  [2, 3],
  [4, 5],
];

const matrixB = [
  [1, 2],
  [3, 4],
];

const result = multiplyMatrices(matrixA, matrixB);
if (result === "Não é possível calcular") {
  console.log(result);
} else {
  console.log("Resultado da multiplicação das matrizes AxB:");
  console.log(result);
}
