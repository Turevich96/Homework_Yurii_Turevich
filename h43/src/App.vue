<template>
  <div id="app">
    <Numb />
  </div>
</template>

<script>
import Numb from "./components/Numb.vue";

export default {
  name: "App",
  components: {
    Numb,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
