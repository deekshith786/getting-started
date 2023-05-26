import { createRouter, createWebHashHistory,  } from "vue-router";
import HomePage from '../../src/HomePage.vue'
import Card from '../../src/Card.vue'
import Vmodel from "../composition-api/Vmodel.vue";
import Methods from "../composition-api/Methods.vue";
import Demo from "../composition-api/Demo.vue";
import Data from "../composition-api/Data.vue";
import ClickCounter from "../ClickCounter.vue";
import HoverCounter from "../HoverCounter.vue";
import ChildStyles from "../ChildStyles.vue";
import FormView from "../FormView.vue";



const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/card",
      name: "card",
      component: Card
    },
    {
      path: "/vmodel",
      name: "vmodel",
      component: Vmodel
    },
    {
      path: "/methods",
      name: "methods",
      component: Methods
    },
    {
      path: "/demo",
      name: "demo",
      component: Demo
    },
    {
      path: "/data",
      name: "data",
      component: Data
    },
    {
      path: "/clickCounter",
      name: "clickCounter",
      component: ClickCounter
    },
    {
      path: "/HoverCounter",
      name: "HoverCounter",
      component: HoverCounter
    },

    {
      path: "/ChildStyles",
      name: "ChildStyles",
      component: ChildStyles
    },
    {
      path: "/FormView",
      name: "FormView",
      component: FormView
    },
    {
      path: "/card",
      name: "card",
      component: Card
    },
  ],
});


export default router