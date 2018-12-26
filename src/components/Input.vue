<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <input
      class="input"
      v-if="type==='input'"
      @input="customInput($event.target.value)"
      autocomplete="off"
      type="text"
    >

    <transition
      name="alert-in"
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX"
    >
      <p
        class="alert"
        v-if="validationError"
      >
        {{ validationError }}
      </p>
    </transition>

  </div>
</template>

<script>
import { Validator } from "vee-validate";
const validator = new Validator();

export default {
  name: "Input",
  props: {
    type: String,
    label: String,
    validation: String
  },

  data() {
    return {
      validationError: ""
    };
  },
  methods: {
    validate(value) {
      return validator.verify(value, this.validation, {
        name: this.label
      });
    },
    async customInput(value) {
      const { valid, errors } = await this.validate(value);
      if (valid) {
        this.validationError = "";
        this.$emit("input", value);
      } else {
        this.validationError = errors[0];
        this.$emit("input", "");
      }
    }
  }
};
</script>

<style lang="scss" src="../assets/styles/Input.scss"/>

