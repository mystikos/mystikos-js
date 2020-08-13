<template>
  <div id="app">
    <TheNavbar class="z-2000"/>
    <transition name="fade" mode="out-in">
      <router-view class="pt-24" v-cloak/>
    </transition>
    <TheFooter class="mt-16"/>
  </div>
</template>

<style lang="scss">
@import './assets/styles/dropzone.css';

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  @apply h-full;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.z-2000 {
  z-index: 2000;
}
</style>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: { TheNavbar, TheFooter },
};
</script>
