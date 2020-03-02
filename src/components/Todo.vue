<template>
  <div id="todo">
    <Input />
    <List />
    <Footer />
  </div>
</template>

<script>
import Input from './Input';
import List from './List';
import Footer from './Footer';

export default {
  name: 'Todo',
  components: {
    Input,
    List,
    Footer
  }
};
</script>

<style scoped>
</style>
