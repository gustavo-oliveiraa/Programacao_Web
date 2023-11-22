const express = require('express');
const mustacheExpresss = require('mustache-express');
const app     = express();      // app é nosso aplicativo

app.engine('html', mustacheExpresss());
app.set('view engine', 'html');
app.set('views', )

app.get('/', function (req, res) {
    res.render('index.html');
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});

