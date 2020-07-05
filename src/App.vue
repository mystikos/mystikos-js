<template>
  <div id="app">
    <TheNavbar/>
    <router-view class="pt-24" v-cloak/>
  </div>
</template>

<style lang="scss">
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  @apply h-screen;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(217deg, rgba(235, 232, 237,.8), rgba(255,0,0,0) 70.71%),
              linear-gradient(127deg, rgba(216,226,237,.8), rgba(0,255,0,0) 70.71%),
              linear-gradient(336deg, rgba(235,225,231,.8), rgba(0,0,255,0) 70.71%);
}

h1, h2, h3, h4, h5, h6, header {
  font-family: 'Roboto', sans-serif;
}

[v-cloak] {
  display: none;
}

#nav a .router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: { TheNavbar },
};
</script>
