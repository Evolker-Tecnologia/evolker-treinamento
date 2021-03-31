const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// app.get('/texo', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/json', (req, res) => {
//     res.send(res.json(

//         {
//             "cliente1": {
//                 "nome": "Joana",
//                 "senha": "senha1",
//                 "profissão": "aluna",
//                 "id": 1
//             },

//             "cliente2": {
//                 "nome": "Maria",
//                 "senha": "senha2",
//                 "profissão": "professora",
//                 "id": 2
//             },

//             "cliente3": {
//                 "nome": "Ana",
//                 "senha": "senha3",
//                 "profissão": "diretora",
//                 "id": 3
//             }
//         }


//     ));
// });

function caixaAlta(entr) {
    let json = {
        entrada: entr,
        saida: entr.toUpperCase()
    }

    return json;
}


// app.get('/converter', (req, res) => {

//     res.send(caixaAlta("Karen"));
// });

//http://localhost:8080/converter?entrada=teste

// app.get('/converter', (req, res) => {
//     var entrada = req.query.entrada;
//     res.send(caixaAlta(entrada));
// });

app.get('/converter', (req, res) => {
    var entrada = req.query.entrada;
    res.send(caixaAlta(entrada));
});

app.post('/converter', jsonParser, (req, res) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    var texto = req.body.entrada;
    var saida = caixaAlta(texto);
    res.end(JSON.stringify(saida));
});


// Executar na porta execífica ou 8080. 
//process.env.PORT é uma variável de ambiente definida pelo ambiente de execução do App Engine. 
//Se o servidor não estiver configurado para fazer detecções nessa porta, ele não receberá solicitações.
const PORT = process.env.PORT || 8080;


app.listen(PORT);




