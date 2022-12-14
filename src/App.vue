<template>
  <div id="app">
  <the-header></the-header>
  <router-view></router-view>
</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {

  name: 'App',
  components: {
    TheHeader

  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background-image: linear-gradient(to left, #434343 0%, #3e4444 100%);
  width: 100%;
  height: 100%;
}</style>

