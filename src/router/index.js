import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Menucontainer",
    component: () => import("../views/Homecontainer.vue"),
    children: [
      {
        path: "about",
        name: "About",
        component: () => import("../views/About.vue")
      },
      {
        path: "B3",
        name: "B3",
        component: () => import("../views/sub_menu/B3.vue")
      },
      {
        path: "Page1",
        name: "NP",
        component: () => import("../views/Page1.vue")
      },
      {
        path: "NEXT",
        name: "NEXT_STEP",
        component: () => import("../views/Next.vue")
      }
    ]
  },
  {
    path: "/admin",
    name: "Admin 管理頁面",
    component: () => import("../views/sub_menu/Menucontainer.vue"),
    children: [
      {
        path: "B2",
        name: "B2_PAGE",
        component: () => import("../views/sub_menu/B2.vue")
      },
      {
        path: "B3",
        name: "B3_PAGE",
        component: () => import("../views/sub_menu/B3.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
