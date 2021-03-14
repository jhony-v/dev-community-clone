import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../modules/Home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/new",
    name: "new",
    component: () => import("../modules/New/New.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
