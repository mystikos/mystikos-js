<template>
  <button
    class="block md:hidden border-none focus:outline-none"
    @click="$emit('toggle-e  xpand')"
  >
    <span
      class="burger burger-first"
      :class="{
        expanded: expanded
      }"
    ></span>
    <span
      class="burger burger-middle"
      :class="{
            expanded: expanded
          }"
    ></span>
    <span
      class="burger burger-last"
      :class="{
            expanded: expanded
          }"
    ></span>
  </button>
</template>

<script>
export default {
  name: 'TheHamburger',
  props: ['expanded'],
};
</script>

<style scoped>
.burger {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0;

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  opacity 0.55s ease;
}

.burger-first {
  transform-origin: 0 0;
}

.burger-first.expanded {
  opacity: 1;
  transform: rotate(45deg) translate(4px, -7px);
  background: #232323;
}

.burger-middle.expanded {
  opacity: 0;
}

.burger-last {
  transform-origin: 0 100%;
}

.burger-last.expanded {
  opacity: 1;
  background: #232323;
  transform: rotate(-45deg) translate(4px, 7px);
}
</style>
