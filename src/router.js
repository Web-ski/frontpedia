import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Entry from "./components/pages/Entry.vue";

Vue.use(VueRouter);

const RouterVue = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/:id",
      name: "entry",
      component: Entry,
    },
  ],
});

export default RouterVue;
