import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import daybookRouter from "@/modules/daybook/router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: 'about' */ "@/views/About"),
  },
  {
    path: "/daybook",
    ...daybookRouter,
  },
];

Vue.use(Router);

let router = new Router({
  routes: routes,
});

export default router;
