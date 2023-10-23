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
