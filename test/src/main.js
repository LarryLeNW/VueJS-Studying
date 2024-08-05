import { createApp } from "vue";
import router from "./router";
import APP from "./App.vue";

const app = createApp(APP);

app.use(router);

app.mount("#app");
