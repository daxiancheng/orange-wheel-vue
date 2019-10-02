<template>
  <div id="app">
    <div class="buttonvue">
      <o-button
        iconName="setting"
        :loading="isloading"
        class="view"
        @click="isloading = !isloading"
      >按钮</o-button>
      <o-button iconName="setting" class="view">按钮</o-button>
      <o-button iconName="setting" iconPosition="right" class="view">按钮</o-button>
      <o-button iconName="zan" iconPosition="right" class="view">按钮</o-button>
      <o-button-group class="view">
        <o-button iconName="left">上一页</o-button>
        <o-button>按钮</o-button>
        <o-button iconName="right" iconPosition="right">下一页</o-button>
      </o-button-group>
      <o-page-button class="view"></o-page-button>
    </div>
    <div class="inputvue">
      <o-input v-model="value" class="view"></o-input>
      <o-input v-model="value" class="view" :disabled="true"></o-input>
      <o-input v-model="value" messageType="error" class="view"></o-input>
       <o-input v-model="value" messageType="success" class="view"></o-input>
    </div>
    <div>
      <o-row></o-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isloading: true,
      value:'橙子'
    };
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 60px;
}
.buttonvue {
  display: flex;
}
.view {
  margin: 0 4px;
}
.inputvue{
  display: flex;
  margin: 30px 0 4px;
}
</style>
