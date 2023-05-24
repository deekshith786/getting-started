<template>
  <div>
    <hr />
    <Article title="Article title" :likes="50" :isPublished="true" />

    <!-- binding props -->
    <ComponentPage name="Bruce" heroName="Batman" />
    <ComponentPage name="Clark" heroName="Superman" />

    <!-- dynamically binding props -->
    <ComponentPage :name="name" :heroName="heroName" />

    <FormView />
    <!-- <EventsPage /> -->
    <HomePage />
    <!-- <DashboardPage /> -->
    <img alt="Vue logo" src="./assets/logo.png" />

    <!-- binding text -->
    <div>{{ greet }} {{ name }}</div>
    <div>{{ channel }}</div>

    <!-- binding html -->
    <div v-html="channel"></div>
    <div v-html="hack"></div>

    <!-- binding attributes -->
    <h2 v-bind:id="headingId">Heading</h2>
    <button v-bind:disabled="isDisabled">Bind</button>

    <!-- binding the class attributes -->
    <h2 class="underline">Underlined line</h2>
    <h2 v-bind:class="status">Status</h2>
    <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
    <h2 v-bind:class="isSoldOut ? 'sold-out' : 'new'">Movie</h2>

    <!-- binding the array attributes -->
    <h2 v-bind:class="['new', 'promoted']">Array movie</h2>

    <!-- binding style attribute -->
    <h2
      v-bind:style="{
        color: highlightColor,
        fontSize: headerSize + 'px',
        padding: '20px',
      }"
    >
      Inline Style
    </h2>
    <h2 v-bind:style="headerStyleObject">Style Object</h2>

    <!-- short hand syntax for v-bind -->
    <!-- just remove the v-bind from all the attributes  -->

    <!-- example -->
    <h2 :style="headerStyleObject">Short hand Styled Object</h2>

    <h1>printing the data sending to nesting - {{ name }}</h1>
  </div>
</template>

<script>
import DashboardPage from "./DashboardPage.vue";
import EventsPage from "./EventsPage.vue";
import FormView from "./FormView.vue";
import HomePage from "./HomePage.vue";
import ComponentPage from "./ComponentPage.vue";
import Article from "./Article.vue";
import { provide } from "vue";

export default {
  name: "App",
  data() {
    return {
      greet: "Welcome",
      name: "Hakaiiii Deekshith",
      heroName: "SuperMan",
      channel: "<b>Code Evolution</b>",
      hack: `<a href='#' onclick="alert('You have been hacked!')">Win a price!</a>`,
      headingId: "heading",
      isDisabled: false,
      status: "danger",
      isPromoted: true,
      isSoldOut: false,
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
    };
  },
  components: {
    DashboardPage,
    HomePage,
    EventsPage,
    FormView,
    ComponentPage,
    Article,
  },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}

.sold-out {
  color: red;
}
</style>
