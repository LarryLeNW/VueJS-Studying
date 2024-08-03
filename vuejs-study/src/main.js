import { createApp } from "vue";
import testLoading from "./syntax/testLoading.vue";
import router from "./router";
import GlobalComponent from "./components/GlobalComponents.vue";
import { readonly } from "vue";
import i18n from "./plugins/i18n";

const app = createApp(testLoading);

app.component("ComponentA", GlobalComponent).component(
    "ComponentB",
    GlobalComponent
);

app.provide("message", readonly("Hello!"));

app.use(router);

app.use(i18n, {
    greetings: {
        hello: "Xin chào",
        message: "Chào mừng bạn đến với khoá học Vue.js",
    },
});

app.mount("#app");
