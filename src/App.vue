<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
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
  font-family: Arial;
  background: linear-gradient(to bottom, #434343 0%, #a2b9bc 100%);
  min-height: 100vh auto;
  overflow: visible;
}
</style>
