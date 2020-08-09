<template>
  <form @submit.prevent="getText" class="text">
    <input v-model="printText" type="text" name id class="text__input" size="100" />
    <button type="submit" class="text__button">OK</button>
    <p class="text__text-block" v-bind:class="{ bgRed:isRed, bgYellow: isYellow}">{{print}}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      printText: "",
      print: "",
      isRed: false,
      isYellow: false,
      isBlu: false,
    };
  },

  methods: {
    getText() {
      // print text in document and reset text in input
      this.print = this.printText;
      this.printText = "";

      //   set bg color for text-box
      if (this.print.length > 0) {
        this.isRed = true;
        this.isYellow = false;
      }
      if (this.print.length > 5) {
        this.isYellow = true;
        this.isRed = false;
      }
    },
  },
};
</script>

<style lang="scss">
.text {
  &__input {
    widows: 400px;
    height: 40px;
    font-size: 24px;
  }
  &__button {
    margin: 30px;
    height: 40px;
    padding: 10px;
  }
  &__text-block {
    font-size: 30px;
  }
}
.bgRed {
  background-color: red;
}
.bgYellow {
  background-color: yellow;
}
</style>