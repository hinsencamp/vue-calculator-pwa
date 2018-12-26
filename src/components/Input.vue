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
    <v-select
      v-if="type ==='dropdown'"
      class="input-dropdown"
      @input="customInput"
      :options="options"
    />

    <div
      v-if="type ==='radio'"
      v-for='option in options'
      :key='option.label'
    >
      <input
        type="radio"
        class="radio"
        :id="option.label"
        :value="option.value"
        :checked="value === option.value"
        @input="customInput($event.target.value)"
      >
      <label :for="option.label">{{option.label}}</label>
    </div>
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
    validation: String,
    options: Array,
    value: [String, Object, Boolean]
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

