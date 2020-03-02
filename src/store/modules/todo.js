const state = {
  items: []
}

// actions
const actions = {
  addItem({
    commit
  }, item) {
    commit('addItem', item);
  },
  deleteItem({
    commit
  }, id) {
    commit('deleteItem', id);
  }
}

// mutations
const mutations = {
  addItem(state, item) {
    state.items.push(item);
  },
  deleteItem(state, id) {
    const item = state.items.find(ele => ele.id === id);
    if (item) {
      state.items.splice(state.items.indexOf(item), 1);
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}