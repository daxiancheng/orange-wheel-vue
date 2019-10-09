<template>
  <div>
    <o-collapse :openshow.sync="openshow" single>
      <o-collapse-item title="标题一" name="1">我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容</o-collapse-item>
      <o-collapse-item title="标题二" name="2">我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容</o-collapse-item>
      <o-collapse-item title="标题三" name="3">我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容</o-collapse-item>
    </o-collapse>
  </div>
</template>

<script>
import collapse from "../../../src/components/Ocollapse.vue";
import collapseitem from "../../../src/components/Ocollapseitem.vue";
export default {
  components: {
    "o-collapse": collapse,
    "o-collapse-item": collapseitem
  },
  data(){
      return {
           openshow:['1']
      }
  }
};
</script>
<style scoped>
</style>