<template>
  <form>
    <Input
      type="input"
      label="Gross Salary"
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
  },
  methods: {
    input: function(input) {
      if (input.type === "input") {
        this.incomeValue = input.value;
      }
    }
  }
};
</script>

<style lang="scss" src="../assets/styles/InputForm.scss"/>