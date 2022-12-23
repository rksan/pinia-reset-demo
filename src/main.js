import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

import { BootstrapVue3 } from "bootstrap-vue-3";

const pinia = createPinia();

// main.js/ts
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(pinia).use(BootstrapVue3).mount("#app");
