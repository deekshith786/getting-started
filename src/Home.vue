<template>
  <div>
    <!-- conditional rendering -->
    <h1 v-if="num === 0">Number is Zero</h1>
    <h1 v-else-if="num < 0">Number is Negative</h1>
    <h1 v-else-if="num > 0">Number is Positive</h1>
    <h1 v-else>Number is not Zero</h1>

    <!-- conditional rendering multiple statements using -->
    <!-- we use a template tag and add the v-if to it, to reduce the duplication of v-if in every tag element -->
    <template v-if="display">
      <h1>Deekshith</h1>
      <h1>Yayanth</h1>
      <h1>Aditya</h1>
    </template>

    <!-- conditional rendering for HTML -->
    <h2 v-show="showElement"><i>Using V-Show</i></h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      num: "hi",
      display: true,
      showElement: true,
    };
  },
};
</script>

<style></style>
