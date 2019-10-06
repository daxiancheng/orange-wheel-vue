<template>
<div>
    <slot></slot>
</div>
</template>

<script>
 import Vue from 'vue'
export default {
    name:'tab',
    props:{
        selected:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            eventBus:new Vue()
        }
    },
    provide(){
        return {
            eventBus:this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected', this.selected)
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'tabhead'){
                vm.$children.forEach((vm)=>{
                    if(vm.$options.name === 'tabitem' && vm.name === this.selected){
                        this.eventBus.$emit('update:selected', this.selected,vm)
                    }
                })
            }
        })
    }
}
</script>

<style scoped>

</style>