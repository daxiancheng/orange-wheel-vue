<template>
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
</template>

<script>
import col from '../../../src/components/Ocol.vue'
import row from '../../../src/components/Orow.vue'
export default {
    components:{
        'o-row':row,
        'o-col':col
    }
}
</script>
<style scoped>
.gridvue{
  margin: 30px 0 4px;
  width: 60%;
  text-align: center;
  color: #ffffff;
}
.colbgcolor{
  background-color: #bbb;
  height: 70px;
}
.rowmargin{
  margin-bottom: 20px;
}
.colbgcolor.color2{
  background-color: #ddd;
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