<template>
    <div class="Otab">
        <slot></slot>
         <div class="line" ref="line"></div>
    </div>
</template>

<script>
export default {
    name:'tabhead',
    inject:['eventBus'],
    mounted(){
        this.eventBus.$on('update:selected',(item,vm)=>{         
            if(vm){
                let width = vm.$el.offsetWidth
                let left = vm.$el.offsetLeft
                this.$refs.line.style.width = width + 'px'
                this.$refs.line.style.left = left + 'px'
                console.log(vm.$el)
                console.log(width,left)
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .Otab{
        display: flex;
        position: relative;
        border-bottom: 1px solid #999;
        .line{
            position: absolute;
            bottom: -1px;
            border-bottom: 2px solid orange;
            transition: all 200;
        }
    }
</style>