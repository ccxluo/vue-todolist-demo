const state = {
  items: []
}

// actions
const actions = {
  addItem({
    commit
  }, item) {
    commit('addItem', item);
  }
}

// mutations
const mutations = {
  addItem(state, item) {
    state.items.push(item);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}