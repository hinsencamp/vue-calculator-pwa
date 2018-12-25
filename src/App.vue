<template>
  <div id="app">
    <main>
      <Panel
        class="calculator-panel"
        headline="Income Tax Calculator"
      >
        <template>
          <span>content goes here.</span>
        </template>
      </Panel>

    </main>
  </div>
</template>

<script>
import Panel from "./components/Panel.vue";
import InputForm from "./components/InputForm";
import Result from "./components/Result";
import { calcTaxes } from "./calc.js";

export default {
  name: "app",
  components: {
    Panel,
    InputForm,
    Result
  }
};
</script>

<style lang="scss" src="./assets/styles/App.scss"/>
