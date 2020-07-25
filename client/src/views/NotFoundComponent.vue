<template>
  <div class="lg:w-2/3 m-auto px-10">
    <h4 class="text-6xl">404</h4>
    <p class="text-2xl mb-8">
      Page could not be found. :(
    </p>
    <router-link to="/"
      class="focus:outline-none py-2 px-4 rounded btn-dust-purple hover:shadow-lg simple-fade
               text-white hover:text-white mb-16"
    >
      Return Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
};
</script>

<style scoped>
.btn-dust-purple {
  background-color: #A7ADC6;
}
</style>
