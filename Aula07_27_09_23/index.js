const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    let usuario = {
        nome: "Guto",
        telefone: 123123
    };

    res.render('index.html', { usuario });
});

app.post('/dados', function (req, res) {
    let usuario = {
        nome: req.body.nome,
        telefone: req.body.telefone
    };
    res.render('dados.html', {usuario});
})

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});














/*
app.get('/:n', function (req, res){
    let usuario = {
        nome: "Guto",
        telefone: 123123
    };
*/










/*
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function (req, res){
    let usuario = {
        nome: "Guto",
        telefone: 123123
    };
    
    res.render('index.html', {usuario});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});
*/













/* 
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

let c = 0;

app.get('/', function (req, res){
    c++;
    console.log('executando rota /');
    res.send('Olá, mundo!' + c);
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});
*/