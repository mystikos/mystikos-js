<template>
  <div id="app">
    <TheNavbar/>
    <router-view class="pt-20" v-cloak/>
  </div>
</template>

<style lang="scss">
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
