<template>
  <input placeholder="Please input" v-model="input" @keyup.enter="addTodo" />
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      input: ''
    };
  },
  methods: {
    addTodo: function() {
      this.input = '';
    }
  }
};
</script>

<style lang='less' scoped>
input {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;

  &:focus {
    outline: none;
    border-color: #409eff;
  }
}
</style>
