<template>
  <div id="todo">
    <Input />
    <List :items="filteredItems" @deleteItem="deleteItem" @updateItem="updateItem" />
    <Footer
      :isVisible="isFooterVivible"
      :activeItemsCount="getActiveItemsCount()"
      :operationTypes="operationTypes"
      :selectedOperation="selectedOperation"
      @onOperationChange="onOperationChange"
    />
  </div>
</template>

<script>
const OPERATION = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
};

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
  data() {
    return {
      operationTypes: Object.values(OPERATION),
      selectedOperation: OPERATION.ALL
    };
  },
  computed: {
    ...mapState({
      items: state => state.todo.items
    }),
    filteredItems: function() {
      if (this.selectedOperation === OPERATION.ACTIVE) {
        return this.items.filter(item => !item.isCompleted);
      } else if (this.selectedOperation === OPERATION.COMPLETED) {
        return this.items.filter(item => item.isCompleted);
      } else {
        return this.items;
      }
    },
    isFooterVivible: function() {
      return this.items.length > 0;
    }
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('todo/deleteItem', id);
    },
    updateItem(id) {
      this.$store.dispatch('todo/updateItem', id);
    },
    onOperationChange(operation) {
      this.selectedOperation = operation;
    },
    getActiveItemsCount() {
      return this.items.filter(item => !item.isCompleted).length;
    }
  }
};
</script>

<style scoped>
</style>
