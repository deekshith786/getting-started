<template>
  <div>
    <h2>{{ firstName }} - {{ lastName }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "DemoRefs",
  setup() {
    const state = reactive({
      firstName: "Deekshith",
      lastName: "wee",
    });

    setTimeout(() => {
      state.firstName = "clark";
      state.lastName = "kentWat";
      console.log(state);
    }, 2000);

    return toRefs(state);
  },
};
</script>

<style scoped></style>
