<template>
  <div class="list-container" v-if="items.length">
    <list-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      @onDelete="onDelete(item.id)"
      @onUpdate="onUpdate(item.id)"
    />
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'List',
  components: {
    'list-item': ListItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    deleteItem: {
      type: Function,
      required: false
    },
    updateItem: {
      type: Function,
      required: false
    }
  },
  methods: {
    onDelete(id) {
      this.$emit('deleteItem', id);
    },
    onUpdate(id) {
      this.$emit('updateItem', id);
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
