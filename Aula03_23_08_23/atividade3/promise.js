// Exemplo de uma Promise que simula uma operação assíncrona
const fazerAlgoAssincrono = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true; // Altere para false para simular uma falha
      if (sucesso) {
        resolve("Operação bem-sucedida");
      } else {
        reject("Erro na operação");
      }
    }, 2000); // Simula uma operação que leva 2 segundos
  });
};

// Uso da Promise
fazerAlgoAssincrono()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });
