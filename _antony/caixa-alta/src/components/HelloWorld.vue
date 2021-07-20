<template>
  <div class="letras">
    <input v-model="texto" v-on:keyup="converteLetras">
    <input v-bind:value="textoMaiusculo">
  </div>
</template>

<script>
export default {
  name: 'convertCase',
  data() {
    return {
      texto: '',
      textoMaiusculo: ''
    }
  },
  methods: {
    converteLetras(){
      this.textoMaiusculo = this.texto.toUpperCase()
    }
  }
}
</script>