<template>
  <div class="buttonvue">
    <o-button @click="toast" class="view">按钮top</o-button>
    <o-button @click="toast1" class="view">按钮center</o-button>
    <o-button @click="toast2" class="view">按钮bottom</o-button>
  </div>
</template>

<script>
import Vue from 'vue'
import button from "../../../src/components/Obutton.vue";
import Oplug from "../../../src/components/Oplug.js";
Vue.use(Oplug) 
export default {
    components:{
        'o-button':button
    },
    methods:{
    toast(){
      this.$Otoast(
      '我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件',
      {
        position:'top',
        handclose:false,
        autotime:2000,
        autoclose:true
      }
      )
    },
    toast1(){
      this.$Otoast(
      '我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件2',
      {
        position:'center',
        handclose:true,
        autotime:2000,
        autoclose:true
      }
      )
    },
     toast2(){
      this.$Otoast(
      '我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件2',
      {
        position:'bottom',
        handclose:true,
        autotime:2000,
        autoclose:false
      }
      )
    }
  }
};
</script>

<style scoped>
.buttonvue {
  display: flex;
  flex-wrap: wrap;
}
.view {
  margin: 4px 4px;
}
</style>