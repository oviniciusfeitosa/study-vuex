<script>
    import CcUsers from './components/users/main.vue'

    export default {
        name: 'AppVueX',
        mounted() {
            const payload = {
                name: 'Vinicius Feitosa da Silva',
                email: 'viniciusfesil@gmail.com',
                level: 'admin-da-porra-toda'
            }
            this.$store.commit('CHANGE_USER', payload)
        },
        components: {
            CcUsers
        },
        computed: {
            user() {
                const {name, email} = this.$store.state.user

                return `O Usuário logado é ${name} e possui o e-mail ${email}`
            }
        }
    }
</script>
<template>
    <div>
        <h1>Welcome Vue2</h1>
        <h4>{{ user }}</h4>
        <hr />
        <cc-users></cc-users>
    </div>
</template>