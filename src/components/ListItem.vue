<template>
  <div class="list-item">
    <div class="custom-checkbox">
      <input
        :id="checkboxId"
        type="checkbox"
        class="item-checkbox"
        :checked="item.isCompleted"
        @change="onUpdate(item.id)"
      />
      <label :for="checkboxId"></label>
    </div>
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
  computed: {
    checkboxId: function() {
      return 'checkbox' + this.item.id;
    }
  },
  methods: {
    onDelete(id) {
      this.$emit('onDelete', id);
    },
    onUpdate(id) {
      this.$emit('onUpdate', id);
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

  .custom-checkbox {
    flex: 1 0 15px;
    position: relative;

    input {
      appearance: none;
      -webkit-appearance: none;
      outline: none;
    }

    input + label {
      z-index: -1;
      border: 1px solid #777;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      display: inline-block;
      opacity: 0.2;
      vertical-align: middle;
    }

    input:checked + label {
      border: 1px solid #45b97c;
    }

    input:checked + label::after {
      content: '';
      width: 8px;
      height: 16px;
      top: 9px;
      left: 17px;
      position: absolute;
      border-right: 1px solid #005344;
      border-bottom: 1px solid #005344;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
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
