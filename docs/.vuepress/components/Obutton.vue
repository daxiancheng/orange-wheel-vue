<template>
<div>
    <div class="buttonvue">
      <o-button iconName="setting" loading class="view" @click="isloading = !isloading">按钮</o-button>
      <o-button iconName="setting" class="view">按钮</o-button>
      <o-button iconName="setting" iconPosition="right" class="view">按钮</o-button>
      <o-button iconName="zan" iconPosition="right" class="view">按钮</o-button>
      <o-button-group class="view">
        <o-button iconName="left">上一页</o-button>
        <o-button>按钮</o-button>
        <o-button iconName="right" iconPosition="right">下一页</o-button>
      </o-button-group>
    </div>
    <div>
          <h3>分页</h3>
          <o-page-button class="view"></o-page-button>
      </div>
</div>
    
    
</template>

<script>
import button from '../../../src/components/Obutton.vue'
import icon from '../../../src/components/oicon.vue'
import Obtngroup from '../../../src/components/Obtngroup.vue'
import OpageButton from '../../../src/components/OpageButton.vue'
export default {
    components:{
        'o-button':button,
        'o-icon':icon,
        'o-button-group':Obtngroup,
        'o-page-button':OpageButton
    },
    mounted(){
      let a
      import('../../../src/components/Obutton.vue').then((e)=>{
        a = e
      })
      console.log(a)
    }
}
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
