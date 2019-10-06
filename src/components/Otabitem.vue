<template>
    <div class="tabitem" @click="clickselect" :class="{active:isactive}">
        <slot></slot>
       
    </div>
</template>

<script>
export default {
    name:'tabitem',
    data(){
        return {
            isactive:false
        }
    },
    props:{
        name:{
            type:String
        }
    },
    inject:['eventBus'],
    methods:{
        clickselect(){
            this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
            this.$emit('click', this.$event)
        }
    },
    created(){
        this.eventBus.$on('update:selected',(select)=>{
                if(select === this.name){
                    this.isactive = true
                }else{
                    this.isactive = false
                }
            })
    }
}
</script>

<style scoped lang="scss">
    .tabitem{
        padding: 0.5em 1em;
        &.active{
            color: orange;
            font-weight: bold;
        }
    }
</style>