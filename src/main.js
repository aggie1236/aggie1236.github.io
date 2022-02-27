import { createApp, h } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: App }],
});
const app = createApp({
  render: () => h(App),
});

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");
