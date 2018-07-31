// Somente à partir das mutations que é possível alterar os estados de uma store.

export default {
    // a store vai fornecer o state
    // o payload será o objeto de informações que será fornecido pelo usuário
    'CHANGE_USER' (state, payload) {
        state.user = payload
    }
}