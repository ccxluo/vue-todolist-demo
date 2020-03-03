<template>
  <div id="todo">
    <Input />
    <List :items="items" @deleteItem="deleteItem" @updateItem="updateItem" />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Input from './Input';
import List from './List';
import Footer from './Footer';

export default {
  name: 'Todo',
  components: {
    Input,
    List,
    Footer
  },
  computed: {
    ...mapState({
      items: state => state.todo.items
    })
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('todo/deleteItem', id);
    },
    updateItem(id) {
      this.$store.dispatch('todo/updateItem', id);
    }
  }
};
</script>

<style scoped>
</style>
