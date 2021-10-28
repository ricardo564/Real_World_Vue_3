export default {
  namespaced: true,
  state: {
    namespaced: true,
    userInfo: {
      id: 'abc123',
      name: 'Camillus',
    },
  },
  getters: {
    listTodos(state) {
      return state.userInfo.name
    },
  },
}
