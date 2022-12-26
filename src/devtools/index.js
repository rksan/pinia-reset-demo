import prosess from "prosess";
// import { App, Plugin } from "vue";

const devtools = {
  install(app) {
    if (
      prosess.env.NODE_ENV === "development" &&
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__
    ) {
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
    }
  },
};

export { devtools };
