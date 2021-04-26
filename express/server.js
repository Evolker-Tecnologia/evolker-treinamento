const mysql = require('mysql');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//Dados Bd
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb',
    multipleStatements: true
});

//Criar conexão
mysqlConnection.connect((err) => {
    if (!err)
        console.log('Conexão estabelecida com sucesso');
    else
        console.log('Falha na conexão!' + JSON.stringify(err, undefined, 2));


});

//Ler
app.get('/converter/:entrada', (req, res) => {
    let result = [];
    mysqlConnection.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;

        rows.forEach((row) => {
            result.push(`id ${row.id}: ${row.name}`)
        });
        res.send(result);
    });
});

//Criar
app.post('/converter/:entrada', jsonParser, (req, res) => {

    var texto = req.params['entrada'];
    const user = { name: texto };

    mysqlConnection.query('INSERT INTO users SET ?', user, (err, res) => {
        if (err) throw err;
    });
    res.end(JSON.stringify(user));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);


//Atualizar
app.put('/converter', jsonParser, function (req, res) {
    let name = req.body.name;
    let id = req.body.id;
    mysqlConnection.query(
        'UPDATE users SET name = ? Where ID = ?',
        [name, id],
        (err, result) => {
            if (err) throw err;

            console.log(`Mudou ${result.changedRows} Linha(s)`);
        }
    );
});


//Deletar
app.delete('/converter', jsonParser, function (req, res) {
    let id = req.body.id;
    mysqlConnection.query(
        'DELETE FROM users WHERE id = ?', id, (err, result) => {
            if (err) throw err;

            console.log(`${result.affectedRows} linha(s) deletadas`);
        }
    );
});
