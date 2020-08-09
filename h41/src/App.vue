<template>
  <div id="app">
    <InputText />
    <Part2Dz />
  </div>
</template>

<script>
import InputText from "./components/InputText.vue";
import Part2Dz from "./components/Part2Dz.vue";

export default {
  name: "App",
  components: {
    InputText,
    Part2Dz,
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
