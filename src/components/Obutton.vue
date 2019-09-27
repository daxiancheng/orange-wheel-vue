<template>
  <div class="buttonBox">
    <button class="btn" :class="iconPosition" @click="loadingShow">
      <o-icon icon="loading" v-if="isloading" class="loading"></o-icon>
      <o-icon :icon="iconName" v-if="iconName && !isloading"></o-icon>
      <div class="btnValue">
        <slot></slot>
      </div>
    </button>
  </div>
</template>


<script>
export default {
  props: {
    iconName: {},
    iconPosition:{
      type:String,
      default:'left'
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  name: "Obutton",
  data(){
    return {
      isloading:false
    }
  },
 mounted(){
   console.log(typeof this.loading)
 },
 methods:{
   loadingShow(){
     if(this.loading){
       this.isloading = !this.isloading
     }
     
   }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.buttonBox {
  font-size: 14px;
  color: #333;
  margin: 0 4px;
}
.btn {
  background-color: #fff;
  border: 1px solid #999;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn:hover{
  outline: none
}
.btn:active{
  background-color: #ccc;
  border:1px solid #999; 
}
.right>.icon{
  order: 2;
  margin-right: 0;
  margin-left: .2em;
}
.rihgt>.btnValue{
  order: 1;
}
@keyframes spin{
  0% {
    transform: rotate(0deg)
}
100% {
  transform: rotate(360deg)
}
}
.loading{
  animation: spin 2s linear infinite;
}
</style>
