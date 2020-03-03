<template>
  <div class="footer">
    <div class="count">3 items left</div>
    <div class="operations">
      <button
        class="op-button"
        :class="operation === selectedOperation ? 'active' : ''"
        v-for="operation in Object.values(operationTypes)"
        :key="operation"
        @click="onClickOperationBtn(operation)"
      >{{operation}}</button>
    </div>
  </div>
</template>

<script>
const OPERATION = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
};

export default {
  name: 'Footer',
  data() {
    return {
      operationTypes: OPERATION,
      selectedOperation: OPERATION.ALL
    };
  },
  methods: {
    onClickOperationBtn(type) {
      this.selectedOperation = type;
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
