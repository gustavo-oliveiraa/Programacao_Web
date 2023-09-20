const express = require('express'); // importou
const app = express(); // criou uma aplicação

app.get('/', function (req, res){
    res.send("App funcionando");
});

app.get('/hello/:n', function(req, res){
    let nome = req.params.n;
    res.send("Olá, mundo! Saudações do " + nome);
})

const PORT = 8080;
app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT);
});