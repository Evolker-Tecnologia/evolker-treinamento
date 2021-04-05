const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

function caixaAlta(entr) {
    let json = {
        entrada: entr,
        saida: entr.toUpperCase()
    }

    return json;
}

let users = [
    "Mateus",
    "João",
    "Antonia",
    "Margarida"
]

function add(user) {
    users.push(user);
    let index = users.indexOf(user);
    return index;
}

app.get('/converter', (req, res) => {
    var entrada = req.query.entrada;
    res.send(caixaAlta(entrada));
});

app.post('/converter', jsonParser, (req, res) => {
    var texto = req.body.entrada;
    var saida = caixaAlta(texto);
    res.end(JSON.stringify(saida));
});

app.get('/user', (req, res) => {
    res.send(users);
});

app.post('/user', jsonParser, (req, res) => {
    var novoUser = req.body.nome;
    var adicionar = add(novoUser);
    res.end(JSON.stringify(adicionar));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);




