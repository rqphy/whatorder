import Vue from "vue";
import VueRouter from "vue-router";
import MCU from "../views/MCU.vue";
import FF from "../views/FF.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MCU",
    component: MCU,
  },
  {
    path: "/ff",
    name: "FF",
    component: FF,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
