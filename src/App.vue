<template>
  <div id="app">
    <Logo />
    <Todo />
  </div>
</template>

<script>
import Logo from './components/Logo';
import Todo from './components/Todo';

export default {
  name: 'App',
  components: {
    Logo,
    Todo
  }
}
</script>

<style>
body {
    background: #f5f5f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
