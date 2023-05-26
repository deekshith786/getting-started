<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="setName">Change Name</button>

    <h2>{{ count }}</h2>
    <button @click="incrementCount">Count</button>

    <h2>{{ first }} {{ last }}</h2>
    <button @click="changeHero">Change name</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "MethodsView",
  setup() {
    const count = ref(0);
    const state = reactive({
      first: "bruce",
      last: "wayne",
    });
    function incrementCount() {
      count.value++;
    }

    function changeHero(){
        state.first= 'clark'
        state.last = 'kent'
    }
    return {
      count,
      incrementCount,
      ...toRefs(state),
      changeHero
    };
  },

  data() {
    return {
      name: "Deekshith",
    };
  },
  methods: {
    setName() {
      this.name = "Dixit";
    },
  },
};
</script>

<style scoped></style>
