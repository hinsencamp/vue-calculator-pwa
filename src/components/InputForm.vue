<template>
  <form class="form">
    <Input
      type="input"
      label="Net Income"
      validation="required|numeric"
    />
  </form>
</template>

<script>
import Input from "./Input";

export default {
  name: "InputForm",
  components: {
    Input
  }
};
</script>

<style lang="scss" src="../assets/styles/InputForm.scss"/>