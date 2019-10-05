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
    <div class="gridvue">
      <o-row class="rowmargin"> 
        <o-col class="colbgcolor" v-for="list in 24" :key="list+1" :class="{color2:list%2===0}">{{list}}</o-col>
      </o-row>
      <o-row class="rowmargin">
        <o-col class="colbgcolor" v-for="list in 2" :key="list+1" :class="{color2:list%2===0}">{{list}}</o-col>
      </o-row>
      <o-row class="rowmargin" gutter="20">
        <o-col class="colbgcolor" v-for="list in 2" :key="list+1" :class="{color2:list%2===0}">{{list}}</o-col>
      </o-row>
      <o-row class="rowmargin">
        <o-col class="colbgcolor" v-for="list in 3" :key="list+1" :class="{color2:list%2===0}">{{list}}</o-col>
      </o-row>
      <o-row class="rowmargin" gutter="20">
        <o-col class="colbgcolor" v-for="list in 3" :key="list+1" :class="{color2:list%2===0}">{{list}}</o-col>
      </o-row>
      <o-row class="rowmargin">
        <o-col class="colbgcolor" col-span="2">2</o-col>
        <o-col class="colbgcolor color2" col-span="22">22</o-col>
      </o-row>
      <o-row class="rowmargin" gutter="20">
        <o-col class="colbgcolor" col-span="2" phone="20">2</o-col>
        <o-col class="colbgcolor color2" col-span="22" phone="4">22</o-col>
      </o-row>
    </div>
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
    <div class="buttonvue">
    <o-button @click="toast" class="view">按钮top</o-button>
    <o-button @click="toast1" class="view">按钮center</o-button>
    <o-button @click="toast2" class="view">按钮bottom</o-button>
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
  flex-wrap: wrap;
}
.view {
  margin: 4px 4px;
}
.inputvue{
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0 4px;
}
.gridvue{
  margin: 30px 0 4px;
  width: 60%;
  text-align: center;
  color: #ffffff;
}
.colbgcolor{
  background-color: orange;
  height: 70px;
}
.rowmargin{
  margin-bottom: 20px;
}
.colbgcolor.color2{
  background-color: rgba(255, 166, 0, 0.80);
}
.layout{
 margin: 30px 0 4px;
  width: 60%;
  text-align: center;
  color: #ffffff;
}
.color3{
  background-color: orange;
}
.color4{
  background-color: rgba(255, 166, 0, 0.80);
}
.color5{
  background-color: rgba(255, 166, 0, 0.6);
}
</style>
