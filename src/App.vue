<script>
    export default {
        computed: {
            user() {
              return `O Usuário logado é ${this.$store.state.user.name} e possui o e-mail ${this.$store.state.user.email}`
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