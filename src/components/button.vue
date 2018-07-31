<script>
    export default {
        methods: {
            mudarDados () {
                const payload = {
                    name: 'Outro Nome',
                    email: 'email@email.com',
                    level: 'usuario-sem-moral'
                }
                this.$store.commit('CHANGE_USER', payload)
            }
        }
    }
</script>
<template>
    <div>
        <button @click="mudarDados">Mudar dados do usuário</button>
    </div>
</template>

<style scoped>

</style>