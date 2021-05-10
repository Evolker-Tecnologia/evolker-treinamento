
window.onload = function () {
    ler();
};

let listaDeUsuarios = []

function ler() {
    var opcoesRequest = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/", opcoesRequest)
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

    listaDeUsuarios = arrayDeUsuarios;
}

function deletar() {

    var raw = JSON.stringify({
        "id": document.getElementById("numeroId").value
    });


    let meusHeaders = new Headers();
    meusHeaders.append("Content-Type", "application/json");

    let opcoesRequest = {
        method: 'DELETE',
        headers: meusHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/", opcoesRequest)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function adicionar() {
    let name = document.getElementById("nomeUsuario").value;

    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/" + name, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function atualizar() {
    let nomeDoUsuario = document.getElementById("atualizarUsuario").value
    let idDoUsuario = document.getElementById("atualizarId").value

    let meusHeaders = new Headers();
    meusHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": idDoUsuario,
        "name": nomeDoUsuario
    });


    let opcoesRequest = {
        method: 'PUT',
        headers: meusHeaders,
        body: raw,
        redirect: 'follow'
    };

    const usuarioAchado = listaDeUsuarios.find(usuario => usuario.id === idDoUsuario);

    if (usuarioAchado) {
        usuarioAchado.name = nomeDoUsuario;
    }

    fetch("http://localhost:8080/", opcoesRequest)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function identificar() {

    let userId = document.getElementById("idUser").value

    var opcoesRequest = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/" + userId, opcoesRequest)
        .then(response => response.text())
        .then(result => lerDados(result))
        .catch(error => console.log('error', error));
}
