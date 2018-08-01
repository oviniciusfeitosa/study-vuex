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
        },
        computed: {
            hasUser() {
                return this.$store.state.user.name !== ''
            }
        }
    }
</script>
<template> 
    <div>
        <button :disabled="!hasUser" @click="mudarDados">Mudar dados do usuário</button>
    </div>
</template>

<style scoped>

</style>