import Vue from "vue";
import VueRouter from "vue-router";
import index from '../components/HelloWorld.vue';
import denglu from "../views/denglu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:"index",
    component:index
  },
  {
    path: "/denglu",
    name: "denglu",
    component: denglu
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;