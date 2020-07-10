<template>
  <div class="home lg:w-2/3 m-auto px-10">
    <h1 class="text-6xl uppercase text-dust-purple">mystikós</h1>
    <h2 class="text-muted-purple text-sm">THE SECRET ONE</h2>
    <p class="pt-5">
      Mystikos is a privacy focused tool that enables users to easily conceal and secure their data
      within image(s) so that their data may be distributed without anyone knowing.
    </p>
    <p class="pt-5">
      Start by generating carrier images and send them to trusted recipients using any mode of
      digital communication. The recipients can then extract the hidden data using our tool.
    </p>
    <p class="pt-5">
      This is the
      <a href="https://vuejs.org/">Vue.js</a> based version of the
      <a href="https://github.com/mystikos/mystikos-js">Mystikos</a> project.
    </p>
    <router-link
      to="/about"
      class="mt-10 inline-block text-gray-200 btn-dust-purple hover:text-white uppercase btn
             simple-fade transform hover:scale-110 hover:shadow-lg"
    >Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped lang="scss">
// TODO: Use CSS variables for the repeated colors
.text-dust-purple {
  color: #A7ADC6;
}

.text-muted-purple {
  color: #56667A;
}

.btn {
  @apply font-bold py-2 px-4 rounded-full;
}

.btn-dust-purple {
  background-color: #A7ADC6;
}

.btn-muted-purple {
  background-color: #56667A;
}
</style>
