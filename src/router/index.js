import Vue from "vue";
import VueRouter from "vue-router";
import index from '../components/HelloWorld.vue';
import denglu from "../views/denglu.vue";
import zhuce from "../views/zhuce.vue";
import xiangqing from "../views/xiangqixinxi.vue";
import scoll from "../views/scoll.vue";
import zhucechenggong from "../views/zhucechenggong.vue"
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
  },{
    path: "/xiangqing",
    name: "xiangqing",
    component: xiangqing
  },{
    path:"/zhucechenggong",
    name:"zhucechenggong",
    component :zhucechenggong
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;