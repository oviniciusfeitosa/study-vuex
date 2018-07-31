// Somente à partir das mutations que é possível alterar os estados de uma store.

export default {

    // por convenção, as mutations devem ser definidas com caracteres maiúsculos.
    'CHANGE_USER' (state, payload) {
    // a store vai fornecer o state
    // o payload será o objeto de informações que será fornecido pelo usuário
        state.user = payload
    }
}