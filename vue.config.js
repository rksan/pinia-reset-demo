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
      // @see : https://stackoverflow.com/questions/64081026/how-use-bundler-build-feature-flags-in-vue-3-0-with-webpack
      // Define Bundler Build Feature Flags
      new webpack.DefinePlugin({
        // Drop Options API from bundle
        __VUE_OPTIONS_API__: true,
      }),
    ],
  },
});
