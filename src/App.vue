<template>
  <div id="app">
    <o-button iconName="setting" :loading="isloading" class="view">按钮</o-button>
    <o-button iconName="setting" iconPosition="right" class="view">按钮</o-button>
    <o-button iconName="zan" iconPosition="right" class="view">按钮</o-button>
    <o-button-group class="view">
      <o-button iconName="left">下一页</o-button>
      <o-button>按钮</o-button>
      <o-button iconName="right">上一页</o-button>
    </o-button-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isloading:true
    }
  }
}
</script>

<style>
*{padding: 0;margin: 0;box-sizing: border-box;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  margin: 60px;
}
.view{
  margin: 0 4px;
}
</style>
