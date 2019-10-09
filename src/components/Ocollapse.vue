<template>
    <div class="ocollapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'Ocollapse',
    props:{
        openshow:{
            type:Array
        },
        single:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            eventBus:new Vue(),
            openname:this.openshow
        }
    },
    provide(){
        return {
            eventBus:this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('selectname',this.openname)
        this.eventBus.$on('addname',(name)=>{
            if(this.single){
                this.openname = [name]
            }else{
                this.openname.push(name)
            }
            this.eventBus.$emit('selectname',this.openname)
            this.$emit('updata:openshow',this.openname)
        })
        this.eventBus.$on('removename',(name)=>{
          let index = this.openshow.indexOf(name)
          this.openname.splice(index,1)
          this.eventBus.$emit('selectname',this.openname)
          this.$emit('updata:openshow',this.openname)
        })
    }
}
</script>

<style scoped lang="scss">
    .ocollapse{
        display: flex;
        flex-direction: column;
        max-width: 600px;
        &:first-child{
            border-top: 1px solid #999;
            border-bottom: 1px solid #999;
        }
        &:not(:first-child){
            border-bottom: 1px solid #999;
        }
    }
</style>