import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from "vue-router";
import Layout from "@/layout/LayoutIndex.vue";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Layout
    // redirect: "/dashboard",
    // children: [
    //   {
    //     path: "/dashboard",
    //     name: "Dashboard",
    //     component: async () => await import("@/views/dashboard/index.vue"),
    //     meta: {
    //       title: "Dashboard",
    //       icon: "dashboard"
    //     }
    //   }
    // ]
  }
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: async () => await import("@/views/login/index.vue"),
  //   meta: {
  //     title: "Login"
  //   }
  // },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: async () => await import("@/views/error-page/404.vue"),
  //   meta: {
  //     title: "404"
  //   }
  // }
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
});
export default router;
