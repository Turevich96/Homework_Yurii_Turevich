<template >
  <div v-on:click="mouse" class="part2">
    <p class="part2__text">Клікніть в рамці</p>
    <input v-model="input" v-on:keyup="click" type="text" name id />
    <p class="part2__text2">{{content}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      mouseUP: 1,
      data: new Date(),
      input: "",
    };
  },
  methods: {
    click() {
      if (event.code == "KeyK") {
        if (this.mouseUP == 2) {
          alert("Ви натиснули ліву клавішу миши");
          this.input = "";
        }
        if (this.mouseUP == 3) {
          alert("Ви натиснули праву клавішу миши");
          this.input = "";
        }
      }
      if (event.code == "KeyT") {
        this.input = "";
        alert(this.data);
      }
    },

    mouse() {
      if (event.which == 1 || event.which == 3) {
        this.content =
          "Щоб дізнатись яку клавішу миші Ви нажали введить в полі нижче літеру 'K', щоб дізнатись реальний час введить в полі нижче літеру 'T'";
        if (event.which == 1) {
          this.mouseUP = 2;
        }
        if (event.which == 3) {
          this.mouseUP = 3;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.part2 {
  border: 1px solid red;
  height: 300px;
  border-radius: 10px;
  &__text2 {
    height: 30px;
    font-size: 30px;
  }
}
</style>