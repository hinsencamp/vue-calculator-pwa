<template>
  <form class="form">
    <Input
      type="input"
      label="Net Income"
      validation="required|numeric"
      v-model="inputs.incomeValue"
      @input="input"
    />
  </form>
</template>

<script>
import Input from "./Input";

export default {
  name: "InputForm",
  components: {
    Input
  },
  data() {
    return {
      inputs: {
        incomeValue: ""
      }
    };
  }
};
</script>

<style lang="scss" src="../assets/styles/InputForm.scss"/>