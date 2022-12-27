const webpack = require("webpack");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "docs",
  assetsDir: "./",
  publicPath: "./",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({
        /* options */
      }),
    ],
  },
  chainWebpack: (config) =>
    config.plugin("feature-flags").use(webpack.DefinePlugin, [
      {
        // __VUE_OPTIONS_API__: JSON.stringify(true),
        // __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(true),
      },
    ]),
});
