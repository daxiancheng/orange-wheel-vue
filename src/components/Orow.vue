<template>
    <div class="row" :style="{marginRight:-gutter+'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        gutter:{
            type:String,
            default:'0'
        }
    },
    mounted(){
         this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    
    }
}
</script>
<style scoped lang="scss">
 .row{
     display: flex;
 }
</style>