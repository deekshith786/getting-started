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

    <!-- rendering of list "Array" -->
    <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>

    <!-- rendering of list "Object" -->
    <!-- key attribute is mandatory  -->
    <h2 v-for="name in fullNames" :key="name.first">
      {{ name.first }} {{ name.last }}
    </h2>

    <div v-for="actor in actors" :key="actor.name">
      <h2>{{ actor.name }}</h2>
      <h2 v-for="(movie, index) in actor.movies" :key="movie">
        {{ index }} - {{ movie }}
      </h2>
    </div>

    <div v-for="info in myInfo" :key="info">
      {{ info }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      num: "hi",
      display: true,
      showElement: true,
      names: ["Bruce", "Clark", "Diana"],
      fullNames: [
        { first: "Bruce", last: "wayne" },
        { first: "Clark", last: "kent" },
        { first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "The Prestige", "Dark Knight"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Deekshith",
        age: 20,
        phone: "7517854152",
      },
    };
  },
};
</script>

<style></style>
