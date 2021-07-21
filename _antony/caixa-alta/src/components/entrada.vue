<template>
  <div>
    <input type="text" :value='msg' @input="changeMess">
  </div>
</template>

<script>

    export default {
        props: ['msg'],
        data() {
            return {
                message: ''
            }
        },
        methods: {
          changeMess(event) {
            this.message = event.target.value,
            this.$emit('messageChanged', this.message)
          }
        }
    }

</script>