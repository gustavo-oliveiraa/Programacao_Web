// Criando uma Promise externa
new Promise((resolveOuter) => {
  // Resolvendo a Promise externa com uma Promise interna
  resolveOuter(
    new Promise((resolveInner) => {
      // Simulando uma operação assíncrona com um atraso de 1 segundo
      setTimeout(resolveInner, 1000);
    }),
  );
})
// Lidando com o sucesso da Promise externa
.then(() => {
  console.log("Promise externa resolvida");
})
// Lidando com qualquer erro na Promise externa
.catch((error) => {
  console.error("Erro na Promise externa", error);
});


Uma Promise externa é criada e resolvida com uma Promise interna.
A Promise interna simula uma operação assíncrona usando setTimeout.
O método .then() é usado para lidar com o sucesso da Promise externa, exibindo "Promise externa resolvida" no console.
O método .catch() é usado para lidar com qualquer erro que possa ocorrer durante a resolução da Promise externa, exibindo "Erro na Promise externa" juntamente com os detalhes do erro.
Esse padrão de Promises aninhadas é útil ao lidar com operações assíncronas complexas e permite um controle mais granular do fluxo de execução e do tratamento de erros.
