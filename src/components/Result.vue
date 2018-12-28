<template>
  <div>
    <table>
      <tr class="table-head">
        <th class="name">Name</th>
        <th class="value">Value</th>
      </tr>
      <tr
        v-for='element in results'
        :key="element.label"
      >
        <td>{{element.label}}</td>
        <td class="value">
          {{element.value}}
        </td>
      </tr>
    </table>

    <button
      v-on:click="handleBackClick"
      class="btn-back"
    >
      Back
    </button>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    results: Object
  },
  methods: {
    handleBackClick: function() {
      this.$emit("clearCalculations");
    }
  }
};
</script>

<style lang="scss" src="../assets/styles/Result.scss"/>