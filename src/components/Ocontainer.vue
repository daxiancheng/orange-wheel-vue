<template>
    <div :class="[container,{sider:issider}]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'o-container',
    data(){
        return {
             issider:false,
             container:'container'
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'Oasider'){
                this.issider = true
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .container{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        &.sider{
            flex-direction: row;
        }
    }
</style>