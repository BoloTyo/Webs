import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/page1",
        name: "Page1",
        component: () => import("../views/Page1.vue"),
      },
      {
        path: "/page2",
        name: "Page2",
        component: () => import("../views/Page2.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
