<template>
  <div>
    <!-- options api -->
    <div>options - {{ o_firstName }}</div>
    <div>options - {{ o_firstName }} {{ o_lastName }} {{ o_heroName }}</div>
    <br />

    <!-- composition api -->
    <div>composition - {{ c_firstName }}</div>
    <div>composition - {{ greet }}</div>

    <div>composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</div>
    <div>composition - {{ greetHero }}</div>


    <div>composition - {{ state.firstName }} {{ state.lastName }} {{ state.heroName }}</div>
    <div>composition - {{ reactiveGreetHero }}</div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "DataView",
  setup() {
    const c_firstName = ref("clark");
    const c_lastName = ref("kent");
    const c_heroName = ref("superMan");
    // c_firstName.value = 'Diana'
    const greet = `hello ${c_firstName.value}`;
    const greetHero = `hello ${c_firstName.value} - ${c_lastName.value} a.k.a ${c_heroName.value}`;
    console.log("c_firstName", c_firstName);


    const state = reactive({
      firstName: "Princess",
      lastName: "Diana",
      heroName: "Wonder Woman",
    });

    const reactiveGreetHero = `Hello ${ state.firstName } ${ state.lastName } a.k.a ${ state.c_heroName }`
    return {
      c_firstName,
      greet,
      greetHero,
      state,
      reactiveGreetHero
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
      o_lastName: "Wayne",
      o_heroName: "Batman",
    };
  },
};
</script>

<style scoped></style>
