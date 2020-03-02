<template>
  <div class="list-item">
    <input type="checkbox" class="item-checkbox" :checked="item.isCompleted" />
    <div class="item-text">{{item.text}}</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang='less' scoped>
.list-item {
  // height: 60px;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:nth-last-child(1) {
    border-bottom: none;
  }

  .item-checkbox {
    font-size: 24px;
    border-radius: 20px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }

  .item-text {
    display: inline-block;
    vertical-align: middle;
    padding: 15px;
  }
}
</style>
