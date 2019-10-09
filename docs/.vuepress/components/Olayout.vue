<template>
  <div class="layout">
    <o-container class="rowmargin" style="height:400px">
      <o-header class="color3" style="height:60px">header</o-header>
      <o-main class="color4">main</o-main>
      <o-footer class="color3" style="height:60px">footer</o-footer>
    </o-container>
    <o-container class="rowmargin" style="height:400px">
      <o-header class="color3" style="height:60px">header</o-header>
      <o-container>
        <o-asider class="color5" style="width:140px">aside</o-asider>
        <o-main class="color4">main</o-main>
      </o-container>
      <o-footer class="color3" style="height:60px">footer</o-footer>
    </o-container>
    <o-container class="rowmargin" style="height:400px">
      <o-asider class="color5" style="width:140px">aside</o-asider>
      <o-container>
        <o-header class="color3" style="height:60px">header</o-header>
        <o-main class="color4">main</o-main>
        <o-footer class="color3" style="height:60px">footer</o-footer>
      </o-container>
    </o-container>
  </div>
</template>

<script>
import content from "../../../src/components/Ocontainer.vue";
import header from "../../../src/components/Oheader.vue";
import footer from "../../../src/components/Ofooter.vue";
import asider from "../../../src/components/Oasider.vue";
import main from "../../../src/components/Omain.vue";
export default {
  components: {
    "o-container": content,
    "o-header": header,
    "o-footer": footer,
    "o-asider": asider,
    'o-main':main
  }
};
</script>

<style scoped>
.rowmargin {
  margin-bottom: 20px;
}
.layout {
  margin: 30px 0 4px;
  width: 60%;
  text-align: center;
  color: #ffffff;
}
.color3 {
  background-color: #aaa;
}
.color4 {
  background-color: #bbb;
}
.color5 {
  background-color: #ccc;
}
</style>