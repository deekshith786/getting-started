<template>
  <h1>{{ add(15, 25, 30) }}</h1>
  <!-- <h1>{{ multiply(15) }}</h1> -->
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      baseMultiplier: 5,
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
  },
};
</script>

<style></style>
