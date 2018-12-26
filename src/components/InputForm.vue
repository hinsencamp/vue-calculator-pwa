<template>
  <form class="form">
    <Input
      type="input"
      label="Gross Salary"
      validation="required|numeric"
      v-model="inputs.incomeValue"
      @input="input"
    />
    <Input
      type="dropdown"
      label="Year"
      validation="required"
      :options="options.year"
      v-model="inputs.yearValue"
    />

    <Input
      type="dropdown"
      label="Church Tax"
      validation="required"
      :options="options.churchtax"
      v-model="inputs.isInChurch"
    />

    <Input
      type="dropdown"
      label="State of Residence"
      validation="required"
      :options="options.state"
      v-model="inputs.stateOfResidence"
    />

    <Input
      type="radio"
      label="Personal Relationship"
      validation="required"
      :options="options.relationship"
      v-model="inputs.relationship"
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
        incomeValue: "",
        yearValue: "",
        isInChurch: "",
        stateOfResidence: "",
        relationship: ""
      },
      options: {
        churchtax: [
          { label: "Yes", value: true },
          { label: "No", value: false }
        ],
        year: [{ label: "2018", value: "2018" }],
        state: [
          { label: "Bayern", value: "Bayern" },
          {
            label: "BadenWuerttemberg",
            value: "BaWue"
          },
          { label: "Other", value: "Other" }
        ],
        relationship: [
          { label: "Married", value: "married" },
          { label: "Single", value: "single" }
        ]
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