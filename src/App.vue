<script>
    export default {
        computed: {
            user() {
                const { name, email } = this.$store.state.user

                return `O Usuário logado é ${name} e possui o e-mail ${email}`
            }
        }
    }
</script>
<template>
    <div>
        <h1>Welcome Vue2</h1>
        <h4>{{ user }}</h4>
    </div>
</template>