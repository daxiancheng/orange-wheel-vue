<template>
  
    <button class="btn" :class="iconPosition" @click="$emit('click',$event)">
      <o-icon icon="loading" v-if="loading" class="loading"></o-icon>
      <o-icon :icon="iconName" v-if="iconName && !loading"></o-icon>
      <div class="btnValue">
        <slot></slot>
      </div>
    </button>
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
     
    }
  },
 mounted(){
   console.log(typeof this.loading)
 },
 methods:{
  
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.btn {
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border: 1px solid #999;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}
.btn:hover{
  border:1px solid orange;
}
.btn:active{
  background-color: #eee;
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
