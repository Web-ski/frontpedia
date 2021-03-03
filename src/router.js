import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";

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
  ],
});

export default RouterVue;
