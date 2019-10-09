<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>
<script>
import svg from './svg.js'
export default {
    props:['icon']
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: #333;
  overflow: hidden;
  margin-right: 0.2em;
}
</style>