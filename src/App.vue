<template>
  <b-container>
    <SamplePage />
  </b-container>
</template>

<script>
import SamplePage from "@/components/pages/SamplePage.vue";

export default {
  name: "App",
  components: {
    SamplePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
