<template>
  <div class="py-5 bg-footer">
    <a href="https://github.com/mystikos/mystikos-js" class="inline-flex justify-center items-center bg-footer-button p-2 rounded
      transition duration-200 ease-in-out hover:shadow-lg">
      <img src="GitHub-Mark-Light-120px-plus.png" alt="GitHub" width="20px" />
      <p class="pl-2 text-white text-xs">
        View Source @ GitHub
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TheFooter.vue',
};
</script>

<style scoped>
.bg-footer {
  background: #e8e5ea linear-gradient(#efeaee, #e8e5ea);
  box-shadow: 0 50vh 0 50vh #e8e5ea;
}

.bg-footer-button {
  @apply transition duration-500 ease-in-out;
  background: linear-gradient(217deg, rgba(198, 180, 208, 0.8), rgba(198, 180, 208, 0) 100%),
    linear-gradient(127deg, rgba(79, 136, 209, 0.8), rgba(106, 154, 215, 0) 100%),
    linear-gradient(336deg, rgba(172, 107, 158, 0.8), rgba(172, 107, 158, 0) 100%);
}
</style>
