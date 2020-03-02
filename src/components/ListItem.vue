<template>
  <div class="list-item">
    <input type="checkbox" class="item-checkbox" :checked="item.isCompleted" />
    <div class="item-text">{{item.text}}</div>
    <div class="item-delete" @click="onDelete(item.id)">X</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    deleteItem: {
      type: Function,
      required: false
    }
  },
  methods: {
    onDelete(id) {
      this.$emit('onDelete', id);
    }
  }
};
</script>

<style lang='less' scoped>
.list-item {
  display: flex;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:nth-last-child(1) {
    border-bottom: none;
  }

  .item-checkbox {
    flex: 1;
    font-size: 24px;
    border-radius: 20px;
    cursor: pointer;
  }

  .item-text {
    flex: 15;
    padding: 15px;
  }

  .item-delete {
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 25px;
    flex: 1;
    color: #cc9a9a;
    cursor: pointer;
  }
}
</style>
