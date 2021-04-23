const mysql = require('mysql');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Conexão estabelecida com sucesso');
    else
        console.log('Falha na conexão!' + JSON.stringify(err, undefined, 2));
});


function caixaAlta(entr) {
    let json = {
        entrada: entr,
        saida: entr.toUpperCase()
    }

    return json;
}

app.get('/converter/:entrada', (req, res) => {
    // var entrada = req.query.entrada;
    var entrada = req.params['entrada']
    res.send(caixaAlta(entrada));
});

app.post('/converter/:entrada', jsonParser, (req, res) => {
    var texto = req.params['entrada'];
    var saida = caixaAlta(texto);
    res.end(JSON.stringify(saida));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);




