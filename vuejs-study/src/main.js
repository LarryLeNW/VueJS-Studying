import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import components from "./syntax/component.vue";
import emit from "./syntax/emit.vue";
import router from "./router";
import GlobalComponent from "./components/GlobalComponents.vue";
import { readonly } from "vue";
const app = createApp(emit);

app.component("ComponentA", GlobalComponent).component(
    "ComponentB",
    GlobalComponent
);
app.provide("message", readonly("Hello!"));

app.use(router);

app.mount("#app");
