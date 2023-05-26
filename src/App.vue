<template>
  <div>

    <Parent />
    <hr>
    <!-- Http request using Axios library -->
    <!-- post-Request -->
    <CreatePosts />
    <!-- get-Request -->
    <PostList />

    <hr />
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>
    <!-- <TabA v-if="activeTab === 'TabA'" />
    <TabB v-if="activeTab === 'TabB'" />
    <TabC v-if="activeTab === 'TabC'" /> -->

    <!-- dynamic component -->
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>

    <hr />
    <h4>app component</h4>
    <ChildStyles />
    <hr />
    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.fistName }} {{ slotProps.lastName }}
      </template>
    </NameList>
    <hr />
    <Card></Card>
    <Card>Card Content</Card>
    <Card><h2>card content</h2></Card>
    <Card>
      <img src="https://picsum.photos/200" />
    </Card>
    <hr />

    <Card>
      <template v-slot:header>
        <h3>header</h3>
      </template>
      <template v-slot:default>
        <img src="https://picsum.photos/200" alt="" />
      </template>
      <template v-slot:footer>
        <button>View Details</button>
      </template>
    </Card>

    <button @click="showPopup = true">show popup</button>

    <Popup v-show="showPopup" @close="closePopup" />
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
// import DashboardPage from "./DashboardPage.vue";
// import EventsPage from "./EventsPage.vue";
import FormView from "./FormView.vue";
import HomePage from "./HomePage.vue";
import ComponentPage from "./ComponentPage.vue";
import Article from "./Article.vue";
import Popup from "./Popup.vue";
import Card from "./Card.vue";
import NameList from "./NameList.vue";
import ChildStyles from "./ChildStyles.vue";
import TabA from "./TabA.vue";
import TabB from "./TabB.vue";
import TabC from "./TabC.vue";
import PostList from "./requests/PostList.vue";
import CreatePosts from "./requests/CreatePosts.vue";
import Parent from "./Parent.vue";
// import { provide } from "vue";

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
      showPopup: false,
      activeTab: "TabA",
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
    };
  },
  components: {
    // DashboardPage,
    HomePage,
    // EventsPage,
    FormView,
    ComponentPage,
    Article,
    Popup,
    Card,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    PostList,
    CreatePosts,
    Parent
},
  provide() {
    return {
      userName: this.name,
    };
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log("data from child component - ", name);
    },
  },
};
</script>

<style scoped>
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

h4 {
  color: chocolate;
}
</style>
