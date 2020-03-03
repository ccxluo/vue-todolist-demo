<template>
  <div class="footer" v-if="isVisible">
    <div class="count">{{activeItemsCount}} items left</div>
    <div class="operations">
      <button
        class="op-button"
        :class="operation === selectedOperation ? 'active' : ''"
        v-for="operation in operationTypes"
        :key="operation"
        @click="onClickOperationBtn(operation)"
      >{{operation}}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    operationTypes: {
      type: Array,
      required: true
    },
    selectedOperation: {
      type: String,
      required: true
    },
    onOperationChange: {
      type: Function,
      required: false
    },
    activeItemsCount: {
      type: Number,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickOperationBtn(type) {
      this.$emit('onOperationChange', type);
    }
  }
};
</script>

<style lang='less' scoped>
.footer {
  display: flex;
  color: #777;
  padding: 15px;

  .count {
    flex: 1;
  }

  .operations {
    flex: 2;

    .op-button {
      padding: 3px 10px;
      margin-left: 10px;
      outline: none;
      cursor: pointer;
      border: none;
      background: none;

      &:focus {
        border: none;
      }

      &.active {
        border: solid 1px rgba(175, 47, 47, 0.2);
        border-radius: 3px;
      }
    }
  }
}
</style>
