<template>
  <div id="app">
    <o-button iconName="setting" :loading="isloading">按钮</o-button>
    <o-button iconName="setting" iconPosition="right">按钮</o-button>
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
</style>
