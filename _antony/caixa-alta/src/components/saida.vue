<template>
    <div>
    
        <entrada :msg="message" @messageChanged='message = $event'></entrada>
        <input :value="message">
    </div>
</template>

<script>

    import entrada from './entrada.vue'

    export default {
        data() {
            return {
                message: 'olá'
            }
        },
        components: {
            'entrada': entrada
        }
    }

</script>