import { createApp, devtools } from "vue";
import App from "@/App.vue";

import { createPinia } from "pinia";

import { BootstrapVue3 } from "bootstrap-vue-3";

// main.js/ts
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const pinia = createPinia();
const app = createApp(App);

app.config.devtools = true;

app.use(pinia).use(BootstrapVue3).use(devtools).mount("#app");
