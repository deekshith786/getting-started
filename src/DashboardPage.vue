<template>
  <div>
    <h1>number after multiply - {{ add(15, 25, 30) }}</h1>
    <!-- <h1>{{ multiply(15) }}</h1> -->
    <EventsPage />  
  </div>
</template>

<script>
import EventsPage from "./EventsPage.vue";

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
  components: { EventsPage },
};
</script>

<style></style>
