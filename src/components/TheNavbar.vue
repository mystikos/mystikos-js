<template>
  <div id="nav" class="fixed w-full">
    <nav class="flex flex-wrap items-center justify-between p-4 bg-gray-300 bg-opacity-75">
      <div class="flex items-center flex-shrink-0 mr-6 text-white">
        <router-link
          to="/"
          class="text-2xl tracking-wider text-gray-700 hover:text-gray-500 simple-fade"
        >MYSTIKOS</router-link>
      </div>
      <TheHamburger :expanded="expanded" @toggle-expand="expanded = !expanded"/>
      <div
        class="flex-grow block w-full md:flex md:items-center md:w-auto"
        :class="{
          'hidden md:block': !expanded,
        }"
      >
        <div class="text-lg md:flex-grow md:text-right">
          <router-link
            to="/"
            class="block mt-4 mr-4 text-gray-600 md:inline-block md:mt-0 hover:text-gray-400
                   simple-fade"
          >HOME</router-link>
          <router-link
            to="/about"
            class="block mt-4 mr-4 text-gray-600 md:inline-block md:mt-0 hover:text-gray-400
                   simple-fade"
          >ABOUT</router-link>
          <router-link
            to="/encode"
            class="block mt-4 mr-4 text-gray-600 md:inline-block md:mt-0 hover:text-gray-400
                   simple-fade"
          >ENCODE</router-link>
          <router-link
            to="/decode"
            class="block mt-4 mr-4 text-gray-600 md:inline-block md:mt-0 hover:text-gray-400
                   simple-fade"
          >DECODE</router-link>
          <router-link
            to="/privacy"
            class="block mt-4 mr-4 text-gray-600 md:inline-block md:mt-0 hover:text-gray-400
                   simple-fade"
          >PRIVACY</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import TheHamburger from './TheHamburger.vue';

export default {
  name: 'TheNavbar',
  components: { TheHamburger },
  data() {
    return {
      expanded: false,
    };
  },
};
</script>

<style scoped>

</style>
