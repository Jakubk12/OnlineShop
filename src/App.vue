<template>
  <div id="app">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/UI/layout/TheHeader.vue";
import TheFooter from "./components/UI/layout/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Arial;
}

body {
  background-image: linear-gradient(to bottom, #434343 0%, #a2b9bc 100%);
  width: 100%;
  height: 100%;
}
</style>
