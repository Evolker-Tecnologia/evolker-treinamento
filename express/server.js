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

app.get('/converter', (req, res) => {
    var entrada = req.query.entrada;
    res.send(caixaAlta(entrada));
});

app.post('/converter', jsonParser, (req, res) => {
    var texto = req.body.entrada;
    var saida = caixaAlta(texto);
    res.end(JSON.stringify(saida));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);




