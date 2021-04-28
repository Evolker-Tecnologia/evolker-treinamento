
window.onload = function () {
    ler();
};

function ler() {

    var opcoesRequest = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/converter", opcoesRequest)
        .then(response => response.text())
        .then(result => lerDados(result))
        .catch(error => console.log('error', error));
}

function lerDados(dados) {
    let arrayDeUsuarios = JSON.parse(dados);
    ul = document.createElement('ul');

    document.getElementById('listaDeUsuarios').appendChild(ul);

    arrayDeUsuarios.forEach(function (usuario) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += 'id: ' + usuario.id + ' ------ ' + 'nome: ' + usuario.name;
    });
}


// var raw = JSON.stringify({
//     "id": id
// });


// function deletar() {
//     let meusHeaders = new Headers();
//     meusHeaders.append("Content-Type", "application/json");

//     let opcoesRequest = {
//         method: 'DELETE',
//         headers: meusHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("http://localhost:8080/converter", opcoesRequest)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }
