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
    component: Layout,
    // redirect: "/dashboard",
    children: [
      {
        path: "/login",
        name: "Login",
        component: async () => await import("@/views/Login/LoginView.vue")
      },
      {
        path: "/register",
        name: "Register",
        component: async () => await import("@/views/Register/RegisterView.vue")
      },
      {
        path: "/user-profile",
        name: "UserProfile",
        component: async () =>
          await import("@/views/UserProfile/UserProfile.vue")
      },
      {
        path: "/blog-editor",
        name: "BlogEditor",
        component: async () => await import("@/views/BlogEditor/BlogEditor.vue")
      },
      {
        path: "/article-editor",
        name: "ArticleEditor",
        component: async () =>
          await import("@/views/ArticleEditor/ArticleEditor.vue")
      }
    ]
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
