<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
const axios = require ('axios')

axios.get('https://gorest.co.in/public/v1/users').then(resposta => console.log(resposta.data))

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
