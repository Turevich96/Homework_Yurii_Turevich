<template>
  <div class="conteiner">
    <input v-model.lazy.number="numbValue" type="text" class="conteiner__input" />
    <p class="conteiner__text">{{numb}}</p>
    <button v-on:click="numb++" class="conteiner__inc">+</button>
    <button v-on:click="numb--" class="conteiner__dec">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbValue: "",
      numb: "",
    };
  },

  watch: {
    numbValue: function () {
      if (this.numbValue !== "") {
        this.numb = this.numbValue;
      }
    },
    numb: function () {
      this.numbValue = "";
    },
  },
};
</script>

<style lang="scss">
.conteiner {
  &__text {
    border: 1px solid black;
    height: 80px;
    width: 30%;
    margin: 40px auto 40px auto;
  }
}
</style>