<template>
  <div class="list-container" v-if="items.length">
    <list-item v-for="item in items" :key="item.id" :item="item" @onDelete="deleteItem" />
  </div>
</template>

<script>
import ListItem from './ListItem';
import { mapState } from 'vuex';

export default {
  name: 'List',
  components: {
    'list-item': ListItem
  },
  computed: {
    ...mapState({
      items: state => state.todo.items
    })
  },
  methods: {
    deleteItem: function(id) {
      this.$store.dispatch('todo/deleteItem', id);
    }
  }
};
</script>

<style lang='less' scoped>
.list-container {
  background: #fff;
  border: 1px solid #dcdfe6;
}
</style>
