import { createApp } from "vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./style.css";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.mount("#app");
