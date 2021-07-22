<template>
  <div class="home">
    <b-button variant="success">a</b-button>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

const axios = require ('axios')

axios.get('https://gorest.co.in/public/v1/users').then(resposta => resposta.data).then(objeto => listaJson(objeto.data))

let itens = []

function listaJson(objeto) {
  for(let i in objeto) {
    itens.push(objeto[i])
  }
}

export default {
  data() {
    return {
      items: itens
    }
  },
  name: 'Home'
}
</script>
